/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ChatService } from "../chat.service";
import { ChatCreateInput } from "./ChatCreateInput";
import { Chat } from "./Chat";
import { Post } from "../../post/base/Post";
import { ChatFindManyArgs } from "./ChatFindManyArgs";
import { ChatWhereUniqueInput } from "./ChatWhereUniqueInput";
import { ChatUpdateInput } from "./ChatUpdateInput";

export class ChatControllerBase {
  constructor(protected readonly service: ChatService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Chat })
  async createChat(@common.Body() data: ChatCreateInput): Promise<Chat> {
    return await this.service.createChat({
      data: data,
      select: {
        createdAt: true,
        id: true,
        message: true,
        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Chat] })
  @ApiNestedQuery(ChatFindManyArgs)
  async chats(@common.Req() request: Request): Promise<Chat[]> {
    const args = plainToClass(ChatFindManyArgs, request.query);
    return this.service.chats({
      ...args,
      select: {
        createdAt: true,
        id: true,
        message: true,
        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async chat(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    const result = await this.service.chat({
      where: params,
      select: {
        createdAt: true,
        id: true,
        message: true,
        sender: true,
        timestamp: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateChat(
    @common.Param() params: ChatWhereUniqueInput,
    @common.Body() data: ChatUpdateInput
  ): Promise<Chat | null> {
    try {
      return await this.service.updateChat({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          message: true,
          sender: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Chat })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteChat(
    @common.Param() params: ChatWhereUniqueInput
  ): Promise<Chat | null> {
    try {
      return await this.service.deleteChat({
        where: params,
        select: {
          createdAt: true,
          id: true,
          message: true,
          sender: true,
          timestamp: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}

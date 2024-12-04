import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const HashtagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="tag" source="tag" />
      </SimpleForm>
    </Create>
  );
};

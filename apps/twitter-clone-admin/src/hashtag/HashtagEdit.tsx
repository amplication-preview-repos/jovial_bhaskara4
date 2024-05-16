import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const HashtagEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="tag" source="tag" />
      </SimpleForm>
    </Edit>
  );
};

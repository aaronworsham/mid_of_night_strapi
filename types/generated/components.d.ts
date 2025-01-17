import type { Schema, Struct } from '@strapi/strapi';

export interface ThreadInstructionThreadStatement
  extends Struct.ComponentSchema {
  collectionName: 'components_thread_instruction_thread_statements';
  info: {
    displayName: 'Thread Statement';
  };
  attributes: {
    copy: Schema.Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'thread-instruction.thread-statement': ThreadInstructionThreadStatement;
    }
  }
}

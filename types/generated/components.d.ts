import type { Schema, Struct } from '@strapi/strapi';

export interface ThreadInstructionClueDiscovered
  extends Struct.ComponentSchema {
  collectionName: 'components_thread_instruction_clue_discovereds';
  info: {
    description: '';
    displayName: 'Clue Discovered';
  };
  attributes: {
    clue: Schema.Attribute.Relation<'oneToOne', 'api::clue.clue'>;
    name: Schema.Attribute.String;
  };
}

export interface ThreadInstructionMysteryDiscovered
  extends Struct.ComponentSchema {
  collectionName: 'components_thread_instruction_mystery_discovereds';
  info: {
    displayName: 'Mystery Discovered';
  };
  attributes: {
    mystery: Schema.Attribute.Relation<'oneToOne', 'api::mystery.mystery'>;
    name: Schema.Attribute.String;
  };
}

export interface ThreadInstructionThreadDiscovered
  extends Struct.ComponentSchema {
  collectionName: 'components_thread_instruction_thread_discovereds';
  info: {
    description: '';
    displayName: 'Thread Discovered';
  };
  attributes: {
    copy: Schema.Attribute.RichText;
    thread: Schema.Attribute.Relation<'oneToOne', 'api::thread.thread'>;
  };
}

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

export interface ThreadInstructionTopicDiscovered
  extends Struct.ComponentSchema {
  collectionName: 'components_thread_instruction_topic_discovereds';
  info: {
    displayName: 'Topic Discovered';
  };
  attributes: {
    name: Schema.Attribute.String;
    research_topic: Schema.Attribute.Relation<
      'oneToOne',
      'api::research-topic.research-topic'
    >;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'thread-instruction.clue-discovered': ThreadInstructionClueDiscovered;
      'thread-instruction.mystery-discovered': ThreadInstructionMysteryDiscovered;
      'thread-instruction.thread-discovered': ThreadInstructionThreadDiscovered;
      'thread-instruction.thread-statement': ThreadInstructionThreadStatement;
      'thread-instruction.topic-discovered': ThreadInstructionTopicDiscovered;
    }
  }
}

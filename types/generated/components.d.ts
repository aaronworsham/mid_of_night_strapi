import type { Schema, Struct } from '@strapi/strapi';

export interface ThreadCasefileClueDiscovered extends Struct.ComponentSchema {
  collectionName: 'components_thread_casefile_clue_discovereds';
  info: {
    displayName: 'Casefile.ClueDiscovered';
  };
  attributes: {
    clue: Schema.Attribute.Relation<'oneToOne', 'api::clue.clue'>;
    Description: Schema.Attribute.RichText;
    Label: Schema.Attribute.String;
  };
}

export interface ThreadNotebookTopicDiscussed extends Struct.ComponentSchema {
  collectionName: 'components_thread_notebook_topic_discusseds';
  info: {
    displayName: 'Notebook.TopicDiscussed';
  };
  attributes: {
    Description: Schema.Attribute.RichText;
    Label: Schema.Attribute.String;
    thread: Schema.Attribute.Relation<'oneToOne', 'api::thread.thread'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'thread.casefile-clue-discovered': ThreadCasefileClueDiscovered;
      'thread.notebook-topic-discussed': ThreadNotebookTopicDiscussed;
    }
  }
}

import type { Schema, Attribute } from '@strapi/strapi';

export interface PostsSocialAutomation extends Schema.Component {
  collectionName: 'components_posts_social_automations';
  info: {
    displayName: 'Social Automation';
  };
  attributes: {
    metaTitle: Attribute.String;
    metaDescription: Attribute.Text;
    metaImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'posts.social-automation': PostsSocialAutomation;
    }
  }
}

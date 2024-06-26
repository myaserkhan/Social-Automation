import type { Schema, Attribute } from '@strapi/strapi';

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media<'images'>;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
  };
  attributes: {
    title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

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
      'blocks.hero': BlocksHero;
      'elements.button-link': ElementsButtonLink;
      'posts.social-automation': PostsSocialAutomation;
    }
  }
}

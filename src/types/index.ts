interface TimeStamps {
  createdAt: Date | string;
  updatedAt: Date | string;
}

export interface Action extends TimeStamps {
  _id: string | number;
  name: string;
  description: string;
  functionString: string;
  resourceTemplateId: string | number;
  resourceTemplate: ResourceTemplate;
}

export interface Trigger extends TimeStamps {
  _id: string | number;
  name: string;
  description: string;
  functionString: string;
  resourceTemplateId: string | number;
  resourceTemplate: ResourceTemplate;
}

export interface Response extends TimeStamps {
  _id: string | number;
  name: string;
  description: string;
  platforms: ResponsePlatform[];
}

export type ResponsePlatform = {
  integrationId: string | number;
  build: number;
  localeGroups: ResponseLocaleGroup[];
};

export type ResponseLocaleGroup = {
  localeGroupId: string | number;
  variations: ResponseVariation[];
};

export type ResponseVariation = {
  name: string;
  responses?: JSON | string;
};

export interface ResourceTemplate extends TimeStamps {
  _id: string | number;
  name: string;
  description?: string;
  schema?: JSON | string;
  integrationId?: string | number;
  functionString?: string;
  key?: string;
}

export interface NodeObject extends TimeStamps {
  _id: string | number;
  name: string;
  description?: string;
  parents?: NodeObject[];
  parentIds?: string | number[];
  root?: boolean;
  trigger?: Trigger;
  triggerId?: string | number;
  responses?: Response[];
  actions?: Action[];
  actionIds?: string | number[];
  priority?: number;
  compositeId?: string | number;
  global?: boolean;
  colour?: string;
}

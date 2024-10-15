import { NodeService } from "../services/node";
import { ActionService } from "../services/action";
import { TriggerService } from "../services/trigger";
import { ResponseService } from "../services/response";
import { ResourceTemplateService } from "../services/resource-template";

export const resolvers = {
  Query: {
    node: async (parent: any, args: any) => {
      return await NodeService.getById(args.nodeId);
    },
  },
  NodeObject: {
    triggerId: async (parent: any) => {
      return parent.trigger;
    },

    trigger: async (parent: any) => {
      return await TriggerService.getById(parent.trigger);
    },

    actionIds: async (parent: any) => {
      return parent.postActions || null;
    },

    actions: async (parent: any) => {
      if (!parent.postActions) return [];
      const actions = await ActionService.getAll();
      return actions.filter(({ _id }) => parent.postActions.includes(_id));
    },

    responseIds: async (parent: any) => {
      return parent.responses;
    },

    responses: async (parent: any) => {
      if (!parent.responses) return [];
      const responses = await ResponseService.getAll();
      return responses.filter(({ _id }) => parent.responses.includes(_id));
    },

    parentIds: async (parent: any) => {
      return parent.parents;
    },

    parents: async (parent: any) => {
      if (!parent.parents) return null;
      const nodes = await NodeService.getAll();
      const parents = nodes.filter(({ compositeId }) =>
        parent.parents.includes(compositeId)
      );
      return parents;
    },

    compositeId: async (parent: any) => {
      return parent.compositeId;
    },
  },
  Trigger: {
    resourceTemplate: async (parent: any) => {
      const template = await ResourceTemplateService.getById(
        parent.resourceTemplateId
      );
      // handle if createdAt is undefined or null
      if (template && !template.createdAt) {
        template.createdAt = String(Date.now());
      }
      return template;
    },
  },
  Action: {
    resourceTemplate: async (parent: any) => {
      const template = await ResourceTemplateService.getById(
        parent.resourceTemplateId
      );
      // handle if createdAt is undefined or null
      if (template && !template.createdAt) {
        template.createdAt = String(Date.now());
      }
      return template;
    },
  },
};

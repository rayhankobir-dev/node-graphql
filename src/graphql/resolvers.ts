import { NodeService } from "../services/node";
import { ActionService } from "../services/action";
import { TriggerService } from "../services/trigger";
import { ResponseService } from "../services/response";
import { ResourceTemplateService } from "../services/resource-template";

export const resolvers = {
  Query: {
    node: async (parent: any, args: any) => {
      const node = await NodeService.getById(args.nodeId);
      return node;
    },
  },
  NodeObject: {
    trigger: async (parent: any) => {
      return await TriggerService.getById(parent.trigger);
    },

    actions: async (parent: any) => {
      if (!parent.postActions) return [];
      const actions = await ActionService.getAll();
      return actions.filter(({ _id }) => parent.postActions.includes(_id));
    },

    responses: async (parent: any) => {
      if (!parent.responses) return [];
      const responses = await ResponseService.getAll();
      return responses.filter(({ _id }) => parent.responses.includes(_id));
    },
  },
  Trigger: {
    resourceTemplate: async (parent: any) => {
      return await ResourceTemplateService.getById(parent.resourceTemplateId);
    },
  },
  Action: {
    resourceTemplate: async (parent: any) => {
      return await ResourceTemplateService.getById(parent.resourceTemplateId);
    },
  },
};

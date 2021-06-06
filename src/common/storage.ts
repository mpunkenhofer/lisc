import {Options, Template} from './types';

export const getOptions = async (): Promise<Options> => {
  console.log('Get Options');
  return new Promise(resolve => resolve({a: true}));
};

export const setOptions = async (options: Options): Promise<Options> => {
  console.log('Set Options');
  return new Promise(resolve => resolve(options));
};

export const getTemplates = async (): Promise<Template[]> => {
  console.log('Get Templates');
  return new Promise(resolve => resolve([{character_name: 'test'}]));
};

export const setTemplates = async (
  templates: Template[]
): Promise<Template[]> => {
  console.log('Set Templates');
  return new Promise(resolve => resolve(templates));
};

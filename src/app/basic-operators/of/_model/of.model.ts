import {AbstractItemModel} from './abstract-item.model';

export class OfModel extends AbstractItemModel {
  public description: string;
  public module: any;
  public process: string;

  constructor(description: string, module: any, process: string) {
    super();
    this.description = description;
    this.module = module;
    this.process = process;
  }
}

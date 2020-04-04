import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Mongo extends Entity {
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Mongo>) {
    super(data);
  }
}

export interface MongoRelations {
  // describe navigational properties here
}

export type MongoWithRelations = Mongo & MongoRelations;

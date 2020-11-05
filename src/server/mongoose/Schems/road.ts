import { SchemaDefinition } from 'mongoose';
import { SchemaFactory } from '.';

export class RoadSchema extends SchemaFactory {
  constructor(definition: SchemaDefinition) {
    super(definition);
    this.schema.methods.getTracks = this.getRoad;
  }

  // TODO: Надо разобраться с этой фигней
  private getRoad = function () {
    console.log('getTracks_inside', this);
    return this.find();
  }
}

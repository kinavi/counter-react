import { SchemaDefinition } from 'mongoose';
import normalize from 'normalize-mongoose';
import { SchemaFactory } from '.';

export class TrackSchema extends SchemaFactory {
  constructor(definition: SchemaDefinition) {
    super(definition);
    this.Schema.plugin(normalize);
  }

  // TODO: Надо разобраться с этой фигней
  private getTracks = function () {
    console.log('getTracks_inside', this);
    return this.find();
  }
}

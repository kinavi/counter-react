import { Schema, SchemaDefinition } from 'mongoose';
import { COMMON_OPTIONS } from '../constants';

export class SchemaFactory {
    protected schema: Schema;

    public get Schema(): Schema { return this.schema; }

    constructor(definition: SchemaDefinition) {
      this.schema = new Schema(definition, COMMON_OPTIONS);
    }
}

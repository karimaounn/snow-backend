import { GeoJSON } from "geojson";
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MapDocument = HydratedDocument<Map>;

@Schema()
export class Map {
    @Prop()
    id: string;

    @Prop({ type: Object})
    geoJson: GeoJSON;

    @Prop()
    analytics: [number, number][]
}

export const MapSchema = SchemaFactory.createForClass(Map);
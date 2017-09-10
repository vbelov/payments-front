import {Attribute, JsonApiModel} from 'angular2-jsonapi';

export class BundleItem extends JsonApiModel {
  @Attribute()
  product: string;

  @Attribute()
  period: number;
}

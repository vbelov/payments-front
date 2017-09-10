import {Attribute, JsonApiModel, JsonApiModelConfig} from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'products'
})
export class Product extends JsonApiModel {
  @Attribute()
  code: string;

  @Attribute()
  name: string;

  @Attribute()
  subject_code: string;
}

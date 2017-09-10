import {Attribute, JsonApiModel, JsonApiModelConfig} from 'angular2-jsonapi';

@JsonApiModelConfig({
  type: 'subscription-periods'
})
export class Period extends JsonApiModel {
  @Attribute()
  code: string;

  @Attribute()
  name: string;
}

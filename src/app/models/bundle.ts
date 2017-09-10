import {Attribute, JsonApiModel, JsonApiModelConfig} from 'angular2-jsonapi';
import {BundleItem} from './bundle_item';

@JsonApiModelConfig({
  type: 'bundles'
})
export class Bundle extends JsonApiModel {
  @Attribute()
  name: string;

  @Attribute()
  price: number;

  items: BundleItem[];

  itemsStr(): string {
    return this.items
      .map(item =>  `${item.product}/${item.period}`)
      .join(', ');
  }
}

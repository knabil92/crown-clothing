import React, {Component} from 'react'
import SHOP_DATA from './shop.data'
import PreviewCollection from '../../component/preview-collection/preview-collection.component'

class ShopPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collections: SHOP_DATA
    }
  }

  render() {
    return(
      <div className='shop-page'>
        {
          this.state.collections.map(({id, ...otherItemProps}) => (
            <PreviewCollection key={id} {...otherItemProps}/>
          ))
        }
      </div>
    )
  }
}

export default ShopPage;
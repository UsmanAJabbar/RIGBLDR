import React from 'react';

import ProductRow from './ProductRow';
import ContentBox from '../assets/ContentBox';
import Button from '../assets/Button';
import AppContext from '../App/AppContext';

import './Build.css';

class Build extends React.Component {
  render() {
    return (
      <AppContext.Consumer>
      { 
        appJsState => (
          <ContentBox>
            <div className="build-overview" style={{ display: 'flex', fontWeight: '800 !' }}>
              <h1 style={{width: '50%'}}>PC</h1>
              <div style={{width: '25%'}} className="build-overview-container">
                <h4>Power</h4>
                <h4>
                  {
                    // TDP Calculator
                    // console.log(appJsState)
                    `${Object.values(appJsState.selected)
                        .reduce(
                          (total, currentPart) => total + (parseInt(currentPart.tdp) || 0), 0)
                        || 0
                      }W`
                  }
                </h4>
              </div>
              <div style={{width: '25%'}} className="build-overview-container">
                <h4>Total</h4>
                  <h4>
                    {
                      `$${Object.values(appJsState.selected)
                          .reduce(
                            (total, currentPart) => Math.round((total + (currentPart?.vendor_endpoint?.price || 0)) * 100) / 100,
                          0) || 0
                        }`
                    }
                  </h4>
                </div>
            </div>
            <table id="build" style={{ width: '100%' }}>
              <thead>
                <tr style={{ textAlign: 'left', textTransform: 'uppercase', fontWeight: 900 }}>
                  <th>Part</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Add/Edit</th>
                </tr>
              </thead>
              <tbody>
                {
                  Object.entries(appJsState.selected).map(([category, productRow], index)=> (
                    <ProductRow
                      key={index}
                      part={category}
                      productRow={appJsState.selected[category] || null }
                    />
                  ))
                }
              </tbody>
            </table>
            <a target="_blank" rel="noreferrer" href={
              `https://www.amazon.com/gp/aws/cart/add.html${
                Object.values(appJsState.selected)
                  .reduce((link, currentPart, index) =>
                    (currentPart?.vendor_endpoint?.vendor_product_id)
                      ? `${link + ((index === 0) ? '?': '&')}` + `ASIN.${index + 1}=${currentPart?.vendor_endpoint?.vendor_product_id}&Quantity.${index + 1}=1`
                      : link
                    , ''
                  )
              }`
            }>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1rem' }}>
                <Button overrides={{ text: { textTransform: 'uppercase', fontWeight: 700 }}}>Proceed</Button>
              </div>
            </a>
          </ContentBox>
        )
      }
      </AppContext.Consumer>
    )
  }
}

export default Build;

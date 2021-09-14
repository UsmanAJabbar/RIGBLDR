import React from 'react';
import { Link } from 'react-router-dom';
import { rfLinkGen } from '../util/utils';

import ProductRow from './ProductRow';
import ContentBox from '../assets/ContentBox';
import ProceedButton from '../assets/ProceedButton';
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
              <h1>PC</h1>
              <div className="build-overview-container">
                <h4>Estimated Power Usage</h4>
                <h4>
                  {
                    // TDP Calculator
                    `${Object.values(appJsState.selected)
                        .reduce((accumulatedValue, currentPartRow) => accumulatedValue + parseInt(currentPartRow.tdp), 0)
                        || 0
                      }W`
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', marginTop: '1rem' }}>
              <Link to={`/proceed`} selectionString='..'>
	        <ProceedButton overrides={{ text: { textTransform: 'uppercase', fontWeight: 700 }}}>Proceed</ProceedButton>
              </Link>
            </div>
          </ContentBox>
        )
      }
      </AppContext.Consumer>
    )
  }
}

export default Build;

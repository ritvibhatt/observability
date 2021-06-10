/*
 *   Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 *   Licensed under the Apache License, Version 2.0 (the "License").
 *   You may not use this file except in compliance with the License.
 *   A copy of the License is located at
 *
 *       http://www.apache.org/licenses/LICENSE-2.0
 *
 *   or in the "license" file accompanying this file. This file is distributed
 *   on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 *   express or implied. See the License for the specific language governing
 *   permissions and limitations under the License.
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import {
  EuiFlexGroup,
  EuiButton,
  EuiFlexItem
} from '@elastic/eui';
import _ from 'lodash';

import { QueryBar } from './queryBar';
import { Filter } from './Filter';

import './search.scss';

export interface IQueryBarProps {
  query: any
  handleQueryChange: (query: string) => void
  handleQuerySearch: () => void
}

export interface IFilterProps {
  startTime: String
  endTime: String
  setStartTime: () => void
  setEndTime: () => void
  setTimeRange: () => void
  setIsOutputStale: () => void
}

function Search (props: any) {

  const {
    query,
    handleQueryChange,
    handleQuerySearch,
    startTime,
    endTime,
    setStartTime,
    setEndTime,
    setIsOutputStale
  } = props;

  function renderQueryBar ({ query, handleQueryChange, handleQuerySearch }: IQueryBarProps) {
    return (
      <QueryBar
        query={ query }
        handleQueryChange={ handleQueryChange }
        handleQuerySearch={ handleQuerySearch }
      />
    );
  }

  return (
    <div className="globalQueryBar">
      <EuiFlexGroup
          gutterSize="s"
          justifyContent="flexEnd"
        >
          { renderQueryBar({ query, handleQueryChange, handleQuerySearch }) }
          <Filter
            startTime={ startTime }
            endTime={ endTime }
            setStartTime={ setStartTime }
            setEndTime={ setEndTime }
            setIsOutputStale={ setIsOutputStale }
            liveStreamChecked={props.liveStreamChecked}
            onLiveStreamChange={props.onLiveStreamChange}
          />
          <EuiFlexItem
            className="euiFlexItem--flexGrowZero"
          >
            <EuiButton 
              onClick={() => {}} 
              iconType="refresh"
            >
              Refresh
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem
            className="euiFlexItem--flexGrowZero"
          >
            <EuiButton 
              onClick={() => {}} 
              iconType="play"
            >
              Live
            </EuiButton>
          </EuiFlexItem>
          <EuiFlexItem
            className="euiFlexItem--flexGrowZero"
          >
            <EuiButton 
              onClick={() => {}} 
              iconType="heart"
            >
              Save
            </EuiButton>
          </EuiFlexItem>
      </EuiFlexGroup>
    </div>
  );
}

Search.propTypes = {
  handleQueryChange: PropTypes.func,
  handleQuerySearch: PropTypes.func
};

export default Search;

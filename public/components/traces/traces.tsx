import { EuiSpacer, EuiTitle } from '@elastic/eui';
import React, { useEffect } from 'react';
import { setBreadcrumbsType } from '../app';
import { SearchBar, SearchBarProps } from '../common/search_bar';
import { TracesTable } from './traces_table';

interface TracesProps extends SearchBarProps {
  setBreadcrumbs: setBreadcrumbsType;
}

export function Traces(props: TracesProps) {
  useEffect(() => {
    props.setBreadcrumbs([
      {
        text: 'Trace analytics',
        href: '#',
      },
      {
        text: 'Traces',
        href: '#traces',
      },
    ]);
  });

  return (
    <>
      <EuiTitle size="l">
        <h2 style={{ fontWeight: 430 }}>Traces</h2>
      </EuiTitle>
      <SearchBar
        query={props.query}
        setQuery={props.setQuery}
        startTime={props.startTime}
        setStartTime={props.setStartTime}
        endTime={props.endTime}
        setEndTime={props.setEndTime}
      />
      <EuiSpacer size="m" />
      <TracesTable />
    </>
  );
}

import { EuiFlexGroup, EuiFlexItem, EuiSpacer, EuiTitle } from '@elastic/eui';
import React, { useEffect } from 'react';
import { setBreadcrumbsType } from '../app';
import { SearchBar, SearchBarProps } from '../common/search_bar';
import { ServiceMap } from '../services/service_map';
import { DashboardTable } from './dashboard_table';
import { ErrorRatePlt } from './error_rate_plt';
import { ThroughputPlt } from './throughput_plt';

interface DashboardProps extends SearchBarProps {
  setBreadcrumbs: setBreadcrumbsType;
}

export function Dashboard(props: DashboardProps) {
  useEffect(() => {
    props.setBreadcrumbs([
      {
        text: 'Trace analytics',
        href: '#',
      },
      {
        text: 'Dashboard',
        href: '#dashboard',
      },
    ]);
  });

  return (
    <>
      <EuiTitle size="l">
        <h2 style={{ fontWeight: 430 }}>Dashboard</h2>
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
      <DashboardTable />
      <EuiSpacer />
      <EuiFlexGroup alignItems="baseline">
        <EuiFlexItem grow={4}>
          <ServiceMap />
        </EuiFlexItem>
        <EuiFlexItem>
          <EuiFlexGroup direction="column">
            <EuiFlexItem>
              <ErrorRatePlt />
            </EuiFlexItem>
            <EuiFlexItem>
              <ThroughputPlt />
            </EuiFlexItem>
          </EuiFlexGroup>
        </EuiFlexItem>
      </EuiFlexGroup>
    </>
  );
}

import { useContext } from 'react';

import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Select from 'react-select';

import { SunburstChart, SynchronizedCharts } from '../../components/Charts';
import { VariablesContext } from '../../context';
import { useAxios } from '../../hooks';
import { CurrentValuesSection } from './CurrentValuesSection';

export const Dashboard = () => {
  const { variables, setSelectedVariables, selectedVariables } =
    useContext(VariablesContext);

  const [{ response: sunburstData, loading }] = useAxios({
    url: '/sunburst.json',
    method: 'GET',
  });

  const onSunburstClick = (id) => {
    setSelectedVariables(variables.filter(({ value }) => value === 'var1'));
  };

  const onAlarmsSelect = (alarm) => {
    const { value: alarmVariable } = alarm || {};

    let mappedVariables = [];

    if (alarmVariable) {
      mappedVariables = variables.filter(
        ({ value }) => value === alarmVariable
      );
    }
    setSelectedVariables(mappedVariables);
  };

  const onVariablesSelect = (variables) => {
    setSelectedVariables(variables);
  };

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <Row className="mb-2">
        <Col xs={12} lg={3} xl={2} className="mb-2">
          <CurrentValuesSection />
        </Col>

        <Col xs={12} lg={6} xl={8}>
          <Card className="mb-3">
            <SunburstChart
              chartData={sunburstData}
              onChartClick={onSunburstClick}
            />
          </Card>
        </Col>
        <Col xs={12} lg={3} xl={2} className="mb-3">
          {variables && (
            <Select
              placeholder="Alarms"
              inputId="aria-example-input"
              aria-labelledby="aria-label"
              isClearable={true}
              isSearchable={true}
              options={[
                { value: 'var1', label: 'Alarm 1' },
                { value: 'var2', label: 'Alarm 2' },
                { value: 'var3', label: 'Alarm 3' },
              ]}
              onChange={onAlarmsSelect}
            />
          )}
        </Col>
      </Row>

      {selectedVariables.length > 0 && (
        <>
          <Row className="justify-content-center">
            <Col xs={12} lg={6} xl={8} className="mb-2">
              <Select
                isMulti
                options={variables}
                className="basic-multi-select"
                value={selectedVariables}
                onChange={onVariablesSelect}
              />
            </Col>
          </Row>
          <SynchronizedCharts variables={selectedVariables} />
        </>
      )}
    </>
  );
};

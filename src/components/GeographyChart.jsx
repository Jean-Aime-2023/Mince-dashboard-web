import { ResponsiveChoropleth } from '@nivo/geo'
import { geoFeatures } from '../data/mockGeoFeatures'
import { mockGeographyData as data } from '../data/mockData'

const GeographyChart = () => {
    if (!geoFeatures || !data) {
        return null; // Return null if data is not ready
      }
      const colorScale = ['#5547D7'];
  return (
    <ResponsiveChoropleth
        data={data}
        theme={{
            axis: {
              domain: {
                line: {
                  stroke: "#CECACA",
                },
              },
              legend: {
                text: {
                  fill: "#CECACA",
                },
              },
              ticks: {
                line: {
                  stroke: "#CECACA",
                  strokeWidth: 1,
                },
                text: {
                  fill: "#CECACA",
                },
              },
            },
            legends: {
              text: {
                fill: "#CECACA",
              },
            },
          }}
        features={geoFeatures.features}
        margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
        domain={[ 0, 1000000 ]}
        valueFormat=".2s"
        projectionTranslation={[ 0.5, 0.5 ]}
        projectionRotation={[ 0, 0, 0 ]}
        enableGraticule={true}
        graticuleLineColor="#dddddd"
        borderWidth={0.5}
        borderColor="#152538"
        colors={colorScale}
        legends={[
            
        ]}
    />
  )
}

export default GeographyChart
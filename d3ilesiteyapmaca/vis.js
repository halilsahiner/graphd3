

const mouseOverFunction = function (d) {
  const circle = d3.select(this);

  node
    .transition(500)
      .style('opacity', o => {
        const isConnectedValue = isConnected(o, d);
        if (isConnectedValue) {
          return 1.0;
        }
        return 0.2
      })
      .style('fill', (o) => {
        let fillColor;
        if (isConnectedAsTarget(o, d) && isConnectedAsSource(o, d)) {
          fillColor = 'green';
        } else if (isConnectedAsSource(o, d)) {
          fillColor = 'red';
        } else if (isConnectedAsTarget(o, d)) {
          fillColor = 'blue';
        } else if (isEqual(o, d)) {
          fillColor = 'hotpink';
        } else {
          fillColor = '#000';
        }
        return fillColor;
      });
    }
//
 
import * as React from 'react';
import { useThree, addEffect, addAfterEffect } from '@react-three/fiber';
import Stats from 'stats-gl';

function StatsGl({
  className,
  parent,
  ...props
}) {
  const gl = useThree(state => state.gl);
  const stats = React.useMemo(() => {
    const stats = new Stats({
      ...props
    });
    stats.init(gl.domElement);
    return stats;
  }, [gl]);
  React.useEffect(() => {
    if (stats) {
      const node = parent && parent.current || document.body;
      node == null || node.appendChild(stats.container);
      if (className) stats.container.classList.add(...className.split(' ').filter(cls => cls));
      const begin = addEffect(() => stats.begin());
      const end = addAfterEffect(() => stats.end());
      return () => {
        node == null || node.removeChild(stats.container);
        begin();
        end();
      };
    }
  }, [parent, stats, className]);
  return null;
}

export { StatsGl };

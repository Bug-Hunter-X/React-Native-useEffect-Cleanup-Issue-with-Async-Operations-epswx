This solution uses `AbortController` to cancel the fetch request if the component unmounts before the response is received, solving the cleanup problem. 

```javascript
import React, { useEffect, useState } from 'react';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const controller = new AbortController();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('some_url', { signal: controller.signal });
        const json = await response.json();
        setData(json);
      } catch (error) {
        if (error.name !== 'AbortError') {
          console.error('Error fetching data:', error);
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <View>
      {/* ... */}
    </View>
  );
};

export default MyComponent; 
```
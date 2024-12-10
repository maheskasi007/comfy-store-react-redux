import AppRoutes from './router/AppRoutes';
import { Suspense } from 'react';



const App = () => {
  return (
    <>
      <Suspense
        fallback={
          <div>
            <svg
              class="animate-spin h-5 w-5 mr-3 ..."
              viewBox="0 0 24 24"
            ></svg>
          </div>
        }
      >
        <AppRoutes />
      </Suspense>
    </>
  );
};
export default App;

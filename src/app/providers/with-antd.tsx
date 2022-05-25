import { ConfigProvider } from 'antd';
import ruRU from 'antd/lib/locale/ru_RU';

export const withAntd = (component: () => React.ReactNode) => () => {
  return <ConfigProvider locale={ruRU}>{component()}</ConfigProvider>;
};

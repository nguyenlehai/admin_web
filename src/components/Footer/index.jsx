import {useIntl} from 'umi';
import {DefaultFooter} from '@ant-design/pro-layout';

const Footer = () => {
  const intl = useIntl();
  const defaultMessage = intl.formatMessage({
    id: 'app.copyright.produced',
  });
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'ADMIN WEB',
          title: 'ADMIN WEB',
          href: 'https://facebook.com/nguyenlehaii',
          blankTarget: true,
        }
      ]}
    />
  );
};

export default Footer;

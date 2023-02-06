import { useRouter } from 'next/router';
import { useMediaQuery } from 'react-responsive';

import { Header } from 'components/Header';
import { NavigationMobile } from 'components/NavigationMobile';

import * as S from './styles';

interface ILayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: ILayoutProps) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  const router = useRouter();

  return (
    <>
      <Header />
      <S.Main>{children}</S.Main>
      {isMobile && <NavigationMobile Path={router.pathname} />}
    </>
  );
};

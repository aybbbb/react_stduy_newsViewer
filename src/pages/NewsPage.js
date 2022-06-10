import { useParams } from 'react-router-dom';
import Categoreis from '../components/Categoreis';
import NewsList from '../components/NewsList';

export default function NewsPage() {
  const params = useParams();

  const category = params.category || 'all';
  return (
    <div>
      <Categoreis />
      <NewsList category={category} />
    </div>
  );
}

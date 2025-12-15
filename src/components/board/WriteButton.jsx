import { Plus } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function WriteButton({ category }) {
  const { isAdmin } = useAuth();

  // 관리자가 아니면 버튼을 표시하지 않음
  if (!isAdmin) return null;

  return (
    <Link
      to={`/write/${category}`}
      className="inline-flex items-center gap-2 px-4 py-2.5 border-2 border-gray-900 dark:border-white text-gray-900 dark:text-white font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95"
    >
      <Plus className="w-4 h-4" />
      <span>글쓰기</span>
    </Link>
  );
}

export default WriteButton;

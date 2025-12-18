import { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectedRoute({ children }) {
  const { effectiveTeam } = useAuth();

  // effectiveTeam이 null이면 홈으로 리다이렉트
  if (!effectiveTeam) {
    return <Navigate to="/" replace />;
  }

  return children;
}

export default ProtectedRoute;


import { useState, useEffect } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import WriteButton from '../components/board/WriteButton';
import ListItem from '../components/board/ListItem';
import EmptyState from '../components/board/EmptyState';
import { getPosts } from '../services/postService';

function Records() {
  const { selectedTeam } = useTeam();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    loadRecords();
  }, [selectedTeam]);

  const loadRecords = async () => {
    try {
      const data = await getPosts('records', selectedTeam);
      setRecords(data);
    } catch (error) {
      console.error('회의록 로드 실패:', error);
    }
  };

  return (
    <PageLayout
      title="회의록"
      showTeamTabs={true}
      actions={<WriteButton category="records" />}
    >
      {selectedTeam === 'jordan' ? (
        <div className="space-y-3">
          {/* 전체 자료 모음 */}
          <a
            href="https://drive.google.com/drive/folders/1Qlb-gWNl9Qjdyc75WVjv0RS1bzhTmK1x"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  요르단 선교 전체 자료
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 1. 선교스쿨 주차별 자료 */}
          <a
            href="https://drive.google.com/drive/folders/1x9HvMJm6SwqHnRaiEoGHts4vswczjYuH"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  1. 선교스쿨 주차별 자료
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 2. 요르단팀 회의록 */}
          <a
            href="https://drive.google.com/drive/folders/15HPVKNGDrQeYRop_EqAI_MWTKl_moYBG"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  2. 요르단팀 회의록
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 2. 현지팀 회의록 */}
          <a
            href="https://drive.google.com/drive/folders/16VhUNZyxGOngRPYI9SLvro-gDXAhcfyx"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  2. 현지팀 회의록
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 3. 예배팀 */}
          <a
            href="https://drive.google.com/drive/folders/1-rV7OQB1SIDY8yK_tYdH0vTHJ8zviqbf"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  3. 예배팀
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 3. 중보팀 */}
          <a
            href="https://drive.google.com/drive/folders/1YTL8tdCdA_kF9t0ubMgy89Xuok6BNCNc"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  3. 중보팀
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 3. 회계팀 */}
          <a
            href="https://drive.google.com/drive/folders/1mSrdyJCe58iEYqqJYKgJViJNb9WxPkQ2"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  3. 회계팀
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 3. 하스피팀 */}
          <a
            href="https://drive.google.com/drive/folders/18unxznxslsrHaFi-ZzrPkDNIAGcE8X-I"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  3. 하스피팀
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 3. 미디어팀 */}
          <a
            href="https://drive.google.com/drive/folders/1AuKa3Q8LOwnN5BJ0uYQ-IxTVDtC_pMl2"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  3. 미디어팀
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>

          {/* 9. 참고자료 */}
          <a
            href="https://drive.google.com/drive/folders/1SxQzdoO9PH9gxxbCTywdlXeJgJS3Em4f"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-4"
          >
            <div className="flex items-center justify-between">
              <div>
                <h3
                  className="text-sm font-medium text-gray-900 dark:text-white"
                  style={{ wordBreak: 'keep-all' }}
                >
                  9. 참고자료
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                  Google Drive에서 보기
                </p>
              </div>
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </div>
          </a>
        </div>
      ) : (
        <>
          {records.length > 0 ? (
            <div className="space-y-3">
              {records.map((record) => (
                <ListItem
                  key={record.id}
                  id={record.id}
                  title={record.title}
                  content={record.content}
                  date={record.createdAt}
                  basePath="/records"
                />
              ))}
            </div>
          ) : (
            <EmptyState message="작성된 회의록이 없습니다" />
          )}
        </>
      )}
    </PageLayout>
  );
}

export default Records;

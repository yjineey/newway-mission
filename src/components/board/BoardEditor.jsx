import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Save, Paperclip } from 'lucide-react';

function BoardEditor({
  title,
  onSubmit,
  initialData = { title: '', content: '', category: '' },
  showCategorySelect = true,
  categories = [],
}) {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(initialData);
  const [files, setFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await onSubmit({ ...formData, files });
      // 성공 시 처리 (나중에 구현)
    } catch (error) {
      console.error('Error submitting:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* 카테고리 선택 */}
      {showCategorySelect && categories.length > 0 && (
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
          >
            카테고리 <span className="text-red-500">*</span>
          </label>
          <select
            id="category"
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="input w-full"
            required
          >
            <option value="">카테고리를 선택하세요</option>
            {categories.map((cat) => (
              <option key={cat.value} value={cat.value}>
                {cat.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* 제목 */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
        >
          제목 <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          className="input w-full"
          placeholder="제목을 입력하세요"
          required
        />
      </div>

      {/* 내용 */}
      <div>
        <label
          htmlFor="content"
          className="block text-sm font-semibold text-gray-900 dark:text-white mb-2"
        >
          내용
        </label>
        <textarea
          id="content"
          value={formData.content}
          onChange={(e) =>
            setFormData({ ...formData, content: e.target.value })
          }
          className="input w-full min-h-[300px] resize-y"
          placeholder="내용을 입력하세요"
          required
        />
      </div>

      {/* 첨부파일 */}
      <div>
        <label className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">
          첨부파일
        </label>

        {/* 파일 업로드 버튼 */}
        <label className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95">
          <Paperclip className="w-4 h-4" />
          <span>파일 선택</span>
          <input
            type="file"
            onChange={handleFileChange}
            className="hidden"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.mp4,.mov"
          />
        </label>

        {/* 선택된 파일 목록 */}
        {files.length > 0 && (
          <div className="mt-3 space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 bg-gray-50 dark:bg-[#2d2d2d] rounded-lg border border-gray-200 dark:border-[#333333]"
              >
                <div className="flex items-center gap-2 min-w-0">
                  <Paperclip className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-900 dark:text-white truncate">
                    {file.name}
                  </span>
                  <span className="text-xs text-gray-500 flex-shrink-0">
                    ({(file.size / 1024).toFixed(1)}KB)
                  </span>
                </div>
                <button
                  type="button"
                  onClick={() => removeFile(index)}
                  className="p-1 hover:bg-gray-200 dark:hover:bg-[#3a3a3a] rounded transition-colors"
                >
                  <X className="w-4 h-4 text-gray-500" />
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* 버튼 */}
      <div className="flex justify-end gap-3 pt-6">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-transparent border border-gray-400 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95"
          disabled={isSubmitting}
        >
          <X className="w-4 h-4" />
          <span>취소</span>
        </button>
        <button
          type="submit"
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary-600 border border-gray-400 dark:border-gray-600 text-white font-medium text-sm rounded-lg transition-all duration-200 cursor-pointer active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
          disabled={isSubmitting}
        >
          <Save className="w-4 h-4" />
          <span>저장</span>
        </button>
      </div>
    </form>
  );
}

export default BoardEditor;

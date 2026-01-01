import { useState } from 'react';
import { useTeam } from '../context/TeamContext';
import PageLayout from '../components/layout/PageLayout';
import { ChevronDown } from 'lucide-react';

function Praise() {
  const { selectedTeam } = useTeam();

  // 찬양 데이터
  const praiseList = [
    // {
    //   id: 7,
    //   title: '찬양 제목 | 수원하나교회',
    //   youtubeId: 'u-e9ixLgG_A',
    //   lyrics: [],
    // },
    // {
    //   id: 8,
    //   title: '찬양 제목 | 뉴웨이교회',
    //   youtubeId: 'u-e9ixLgG_A',
    //   lyrics: [],
    // },

    {
      id: 5,
      title: '나는 주님을 찬양하리라 | 수원하나교회',
      youtubeId: 'u-e9ixLgG_A',
      lyrics: [
        {
          arabic: 'أشدو للملك إلهي',
          pronunciation: '아쉬두 리말리크 와우 할릴루',
          korean: '나는 주님을 찬양하리라',
        },
        {
          arabic: 'وأهلل من مثلك ',
          pronunciation: ' 만 미쓸루카 일라히',
          korean: '새 노래로 주찬양',
        },
        {
          arabic: 'يفرح قلبي قربك',
          pronunciation: '야프라후 깔비 꿀바카',
          korean: '온 맘과 뜻 다하여서',
        },
        {
          arabic: 'يملأ عيني مجدك',
          pronunciation: '얌라우 아이니 마즈두카',
          korean: '주님을 기뻐하리',
        },
        {
          arabic: 'اسجد لك وحدك',
          pronunciation: '아쓰주두 라카 와흐다카',
          korean: '두 손을 높이 들고서',
        },
        {
          arabic: 'سيدي أعبدك',
          pronunciation: '싸이디 아아 부두카',
          korean: '주님을 경배하리',
        },
        {
          arabic: 'سيدي',
          pronunciation: '아아 부두카',
          korean: '경배하리',
        },
      ],
    },
    {
      id: 6,
      title: '예수 우리 왕이여 | 수원하나교회',
      youtubeId: 'BrM-16I33Zc',
      lyrics: [
        {
          arabic: 'يسوع نتوجك',
          pronunciation: '야수우 나투위주카',
          korean: '예수 우리 왕이여 이땅에 오셔서',
        },
        {
          arabic: 'نعلن ملكك',
          pronunciation: '누일누 말리카',
          korean: '찬양을 받아주시옵소서',
        },
        {
          arabic: 'تعال الآن في وسطنا',
          pronunciation: '타알 알아나 피 와사트나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'ولتعلو وسط سبحنا',
          pronunciation: '왈타알루 와사트 사브하나',
          korean: '주님을 경배하오니',
        },
        {
          arabic: 'تعبدك قلوبنا',
          pronunciation: '타부두카 쿨루부나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'يرفعك سجودنا',
          pronunciation: '야르파우카 수주두나',
          korean: '주님을 경배하오니',
        },
        {
          arabic: 'يلذ لك تسبيحنا',
          pronunciation: '야즈다 라카 타스비후나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'فتعال وخذ مجدك',
          pronunciation: '파타알 와후즈 마즈다카',
          korean: '왕이신 예수여 오소서',
        },
      ],
    },
    {
      id: 7,
      title: '나는 주님을 찬양하리라 + 예수 우리 왕이여 | 뉴웨이교회',
      youtubeId: 'Kon8vxVpkVM',
      lyrics: [
        {
          arabic: 'أشدو للملك إلهي',
          pronunciation: '아쉬두 리말리크 와우 할릴루',
          korean: '나는 주님을 찬양하리라',
        },
        {
          arabic: 'وأهلل من مثلك ',
          pronunciation: ' 만 미쓸루카 일라히',
          korean: '새 노래로 주찬양',
        },
        {
          arabic: 'يفرح قلبي قربك',
          pronunciation: '야프라후 깔비 꿀바카',
          korean: '온 맘과 뜻 다하여서',
        },
        {
          arabic: 'يملأ عيني مجدك',
          pronunciation: '얌라우 아이니 마즈두카',
          korean: '주님을 기뻐하리',
        },
        {
          arabic: 'اسجد لك وحدك',
          pronunciation: '아쓰주두 라카 와흐다카',
          korean: '두 손을 높이 들고서',
        },
        {
          arabic: 'سيدي أعبدك',
          pronunciation: '싸이디 아아 부두카',
          korean: '주님을 경배하리',
        },
        {
          arabic: 'سيدي',
          pronunciation: '아아 부두카',
          korean: '경배하리',
        },
        {
          arabic: 'يسوع نتوجك',
          pronunciation: '야수우 나투위주카',
          korean: '예수 우리 왕이여 이땅에 오셔서',
        },
        {
          arabic: 'نعلن ملكك',
          pronunciation: '누일누 말리카',
          korean: '찬양을 받아주시옵소서',
        },
        {
          arabic: 'تعال الآن في وسطنا',
          pronunciation: '타알 알아나 피 와사트나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'ولتعلو وسط سبحنا',
          pronunciation: '왈타알루 와사트 사브하나',
          korean: '주님을 경배하오니',
        },
        {
          arabic: 'تعبدك قلوبنا',
          pronunciation: '타부두카 쿨루부나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'يرفعك سجودنا',
          pronunciation: '야르파우카 수주두나',
          korean: '주님을 경배하오니',
        },
        {
          arabic: 'يلذ لك تسبيحنا',
          pronunciation: '야즈다 라카 타스비후나',
          korean: '주님을 찬양하오니',
        },
        {
          arabic: 'فتعال وخذ مجدك',
          pronunciation: '파타알 와후즈 마즈다카',
          korean: '왕이신 예수여 오소서',
        },
      ],
    },

    {
      id: 3,
      title: '주 예수 안에 | 수원하나교회',
      youtubeId: 'rZYk_D3x3BE',
      lyrics: [
        {
          arabic: 'فيك يا يسوع فيك حرية فيك شفاء',
          pronunciation: '피잌 야 예수 피잌 후리야 피잌 쉬파-',
          korean: '예수 안에 자유있네 치유있네',
        },
        {
          arabic: 'فيك سالم فيك حياة فيك يا يسوع',
          pronunciation: '피잌 살람 피잌 하야 피잌 야 예수',
          korean: '평화있네 생명있네 예수 안에',
        },
        {
          arabic: 'حرية شفاء سالم حياة',
          pronunciation: '호뤼아 쉬파 살람 하야',
          korean: '자유 치유 평화 생명',
        },
        {
          arabic: 'في يسوع في يسوع فيك يا يسوع',
          pronunciation: '피 예수 피 예수 피잌 야 예수',
          korean: '예수 안에 예수 안에 예수 안에',
        },
        {
          arabic: 'أمواج شفاء أمواج حياة',
          pronunciation: '암와즈 쉬파 암와즈 하야',
          korean: '치유의 파도 생명의 파도',
        },
        {
          arabic: 'أمواج محبة من عرش الآب',
          pronunciation: '암와즈 마합빠 민 아르쉴랍',
          korean: '사랑의 파도가 아버지 보좌로부터',
        },
      ],
    },
    {
      id: 4,
      title: '주 예수 안에 | 뉴웨이교회',
      youtubeId: 'GKacomQt8yg',
      lyrics: [
        {
          arabic: 'فيك يا يسوع فيك حرية فيك شفاء',
          pronunciation: '피잌 야 예수 피잌 후리야 피잌 쉬파-',
          korean: '예수 안에 자유있네 치유있네',
        },
        {
          arabic: 'فيك سالم فيك حياة فيك يا يسوع',
          pronunciation: '피잌 살람 피잌 하야 피잌 야 예수',
          korean: '평화있네 생명있네 예수 안에',
        },
        {
          arabic: 'حرية شفاء سالم حياة',
          pronunciation: '호뤼아 쉬파 살람 하야',
          korean: '자유 치유 평화 생명',
        },
        {
          arabic: 'في يسوع في يسوع فيك يا يسوع',
          pronunciation: '피 예수 피 예수 피잌 야 예수',
          korean: '예수 안에 예수 안에 예수 안에',
        },
        {
          arabic: 'أمواج شفاء أمواج حياة',
          pronunciation: '암와즈 쉬파 암와즈 하야',
          korean: '치유의 파도 생명의 파도',
        },
        {
          arabic: 'أمواج محبة من عرش الآب',
          pronunciation: '암와즈 마합빠 민 아르쉴랍',
          korean: '사랑의 파도가 아버지 보좌로부터',
        },
      ],
    },
    {
      id: 1,
      title: '온 성도와 천사 | 수원하나교회',
      youtubeId: 'tQ4e51h76ho',
      lyrics: [
        {
          arabic: 'يجثو أمام عرشك ألوف وربوات',
          pronunciation: '야즈두 아마마 아르쉬카 울루프 와라바와트',
          korean: '온 성도와 천사 보좌에 경배해',
        },
        {
          arabic: 'ويطرح الشيوخ أكاليلهم لك ويهتفون',
          pronunciation: '와야트라후 쉬유크 아칼리라훔 라카 와야흐티푼',
          korean: '모든 장로들 면류관을 드리네 어린양께',
        },
        {
          arabic: 'أنت وحدك مستحق أنت وحدك مستحق',
          pronunciation: '안타 와흐다카 무쓰타히쿤 안타 와흐다카 무쓰타히쿤',
          korean: '주는 존귀하신 분 주는 존귀하신 분',
        },
        {
          arabic: 'فمنك كل الاشياء وبك كل الاشياء ولمجدك',
          pronunciation: '파민카 쿨룰 아쉬야 와비카 쿨룰 아쉬야아 와리마즈드카',
          korean: '만물 주께 나와 주께 돌아가니 영광 받으소서',
        },
        {
          arabic: 'نرفع تسبيحنا ليللا و نهار',
          pronunciation: '나르파우 타쓰비하나 레일라 와나하르',
          korean: '주야로 기도의 향 올라가네',
        },
      ],
    },
    {
      id: 2,
      title: '온 성도와 천사 | 뉴웨이교회',
      youtubeId: 'miM8ZQOB4bA',
      lyrics: [
        {
          arabic: 'يجثو أمام عرشك ألوف وربوات',
          pronunciation: '야즈두 아마마 아르쉬카 울루프 와라바와트',
          korean: '온 성도와 천사 보좌에 경배해',
        },
        {
          arabic: 'ويطرح الشيوخ أكاليلهم لك ويهتفون',
          pronunciation: '와야트라후 쉬유크 아칼리라훔 라카 와야흐티푼',
          korean: '모든 장로들 면류관을 드리네 어린양께',
        },
        {
          arabic: 'أنت وحدك مستحق أنت وحدك مستحق',
          pronunciation: '안타 와흐다카 무쓰타히쿤 안타 와흐다카 무쓰타히쿤',
          korean: '주는 존귀하신 분 주는 존귀하신 분',
        },
        {
          arabic: 'فمنك كل الاشياء وبك كل الاشياء ولمجدك',
          pronunciation: '파민카 쿨룰 아쉬야 와비카 쿨룰 아쉬야아 와리마즈드카',
          korean: '만물 주께 나와 주께 돌아가니 영광 받으소서',
        },
        {
          arabic: 'نرفع تسبيحنا ليللا و نهار',
          pronunciation: '나르파우 타쓰비하나 레일라 와나하르',
          korean: '주야로 기도의 향 올라가네',
        },
      ],
    },

    // {
    //   id: 9,
    //   title: '모든 영광과 존귀 | 수원하나교회',
    //   youtubeId: 'fBuQ8l83kik',
    //   lyrics: [
    //     {
    //       arabic: 'اهديك كل المجد والكرامة',
    //       pronunciation: '우디칼쿨랄 마즈디 왈 카라마티',
    //       korean: '모든 영광과 존귀 주께 드리리',
    //     },
    //     {
    //       arabic: 'أرفع يداي نحوك وأسبح اسمك',
    //       pronunciation: '아르파우 야다야 나흐와카 와 우쌉비 우스마카',
    //       korean: '나의 두 손을 높이 들고 주의 이름 찬양해',
    //     },
    //     {
    //       arabic: 'أنت عظيم ليس مثلك يا رب\nتصنع العجائب  تصنع العجائب',
    //       pronunciation: '안타 아딈 라이싸 미쓸라카 야랍 타쓰나우알 좌이바 타쓰나우알 좌이바',
    //       korean: '나의 주는 위대하신 하나님\n전능하신 나의 왕 아름다우신 주님',
    //     },
    //     {
    //       arabic: 'أنت عظيم ليس مثلك يا رب\nتسطيع كل شيء  تسطيع كل شيء',
    //       pronunciation: '안타 아딈 라이싸 미쓸라카 야랍 타쓰타티울 쿨라 샤이 타쓰타티울 쿨라 샤이',
    //       korean: '나의 주는 위대하신 하나님\n모든 것 가능케 할 전능하신 하나님',
    //     },
    //     {
    //       arabic: 'مبارك الرب إلهنا الكائن والذي يأتي',
    //       pronunciation: '마바라쿨 루브 일라후나 알 카이누 왈라디 야티',
    //       korean: '전능하신 하나님 찬양\n언제나 동일하신 주',
    //     },
    //     {
    //       arabic: 'مبارك الرب إلهنا مليك أبدي',
    //       pronunciation: '마바라쿨 루브 일라후나 말리쿤 아바디',
    //       korean: '전능하신 하나님 찬양\n영원히 다스리시네',
    //     },
    //     {
    //       arabic: 'نرفعك فوق الكل\nنرفعك فوق الكل',
    //       pronunciation: '나르파우카 포우칼 쿨 나르파우카 포우칼 쿨',
    //       korean: '나 주의 이름 높이리\n나 주의 이름 높이리',
    //     },
    //     {
    //       arabic: 'نرفعك عاليا فوق الكل\nنرفعك فوق الكل',
    //       pronunciation: '나르파우카 알리얀 포우칼 쿨 나르파우카 포우칼 쿨',
    //       korean: '하늘 높이 올린 깃발처럼\n나 주의 이름 높이리',
    //     },
    //   ],
    // },
    // {
    //   id: 10,
    //   title: '모든 영광과 존귀 | 뉴웨이교회',
    //   youtubeId: 'fBuQ8l83kik',
    //   lyrics: [
    //     {
    //       arabic: 'اهديك كل المجد والكرامة',
    //       pronunciation: '우디칼쿨랄 마즈디 왈 카라마티',
    //       korean: '모든 영광과 존귀 주께 드리리',
    //     },
    //     {
    //       arabic: 'أرفع يداي نحوك وأسبح اسمك',
    //       pronunciation: '아르파우 야다야 나흐와카 와 우쌉비 우스마카',
    //       korean: '나의 두 손을 높이 들고 주의 이름 찬양해',
    //     },
    //     {
    //       arabic: 'أنت عظيم ليس مثلك يا رب\nتصنع العجائب  تصنع العجائب',
    //       pronunciation: '안타 아딈 라이싸 미쓸라카 야랍 타쓰나우알 좌이바 타쓰나우알 좌이바',
    //       korean: '나의 주는 위대하신 하나님\n전능하신 나의 왕 아름다우신 주님',
    //     },
    //     {
    //       arabic: 'أنت عظيم ليس مثلك يا رب\nتسطيع كل شيء  تسطيع كل شيء',
    //       pronunciation: '안타 아딈 라이싸 미쓸라카 야랍 타쓰타티울 쿨라 샤이 타쓰타티울 쿨라 샤이',
    //       korean: '나의 주는 위대하신 하나님\n모든 것 가능케 할 전능하신 하나님',
    //     },
    //     {
    //       arabic: 'مبارك الرب إلهنا الكائن والذي يأتي',
    //       pronunciation: '마바라쿨 루브 일라후나 알 카이누 왈라디 야티',
    //       korean: '전능하신 하나님 찬양\n언제나 동일하신 주',
    //     },
    //     {
    //       arabic: 'مبارك الرب إلهنا مليك أبدي',
    //       pronunciation: '마바라쿨 루브 일라후나 말리쿤 아바디',
    //       korean: '전능하신 하나님 찬양\n영원히 다스리시네',
    //     },
    //     {
    //       arabic: 'نرفعك فوق الكل\nنرفعك فوق الكل',
    //       pronunciation: '나르파우카 포우칼 쿨 나르파우카 포우칼 쿨',
    //       korean: '나 주의 이름 높이리\n나 주의 이름 높이리',
    //     },
    //     {
    //       arabic: 'نرفعك عاليا فوق الكل\nنرفعك فوق الكل',
    //       pronunciation: '나르파우카 알리얀 포우칼 쿨 나르파우카 포우칼 쿨',
    //       korean: '하늘 높이 올린 깃발처럼\n나 주의 이름 높이리',
    //     },
    //   ],
    // },
    // {
    //   id: 11,
    //   title: '영광의 왕 | 수원하나교회',
    //   youtubeId: '2eP6HfGP71Y',
    //   lyrics: [
    //     {
    //       arabic: 'نباركك يا مليك المجد\nربنا وولينا إلى الأبد',
    //       pronunciation: '누바 리 쿠카 야 말리칼 마즈디 랍브나 와왈 리나 이일라 아바디',
    //       korean: '영광의 왕 찬양합니다\n위대하신 주 우리 구원자',
    //     },
    //     {
    //       arabic: 'قد ارتفعت رأسا على الجميع\nلك يا رب القوة والسلطان',
    //       pronunciation: '까-드 이르따파따 라아 싼나 랄자미아이 라카야아 랍불꾸아 와 쑬똰',
    //       korean: '존귀하신 주 경배합니다\n보좌에 계신 어린 양',
    //     },
    //     {
    //       arabic: 'يسوع نرفع اسمك عاليا\nيسوع نرفع اسمك فوق كل اسم',
    //       pronunciation: '예쑤- 날파아 우쑤마카 아알리얀 예쑤- 날파아우쑤마카 뿌까 쿨리이씀',
    //       korean: '예수 죽임 당한 어린 양\n예수 모든 이름 위에 뛰어난 이름',
    //     },
    //     {
    //       arabic: 'فالبهاء والجلال لك وحدك\nيسوع نبارك اسمك',
    //       pronunciation: '팔바하우 왈자라알 라쿠와흐다카 예-쑤 누바리쿠 이쓰마카',
    //       korean: '영원히 찬송 받기 합당한\n영광의 그 이름 예수',
    //     },
    //   ],
    // },
    // {
    //   id: 12,
    //   title: '영광의 왕 | 뉴웨이교회',
    //   youtubeId: '2eP6HfGP71Y',
    //   lyrics: [
    //     {
    //       arabic: 'نباركك يا مليك المجد\nربنا وولينا إلى الأبد',
    //       pronunciation: '누바 리 쿠카 야 말리칼 마즈디 랍브나 와왈 리나 이일라 아바디',
    //       korean: '영광의 왕 찬양합니다\n위대하신 주 우리 구원자',
    //     },
    //     {
    //       arabic: 'قد ارتفعت رأسا على الجميع\nلك يا رب القوة والسلطان',
    //       pronunciation: '까-드 이르따파따 라아 싼나 랄자미아이 라카야아 랍불꾸아 와 쑬똰',
    //       korean: '존귀하신 주 경배합니다\n보좌에 계신 어린 양',
    //     },
    //     {
    //       arabic: 'يسوع نرفع اسمك عاليا\nيسوع نرفع اسمك فوق كل اسم',
    //       pronunciation: '예쑤- 날파아 우쑤마카 아알리얀 예쑤- 날파아우쑤마카 뿌까 쿨리이씀',
    //       korean: '예수 죽임 당한 어린 양\n예수 모든 이름 위에 뛰어난 이름',
    //     },
    //     {
    //       arabic: 'فالبهاء والجلال لك وحدك\nيسوع نبارك اسمك',
    //       pronunciation: '팔바하우 왈자라알 라쿠와흐다카 예-쑤 누바리쿠 이쓰마카',
    //       korean: '영원히 찬송 받기 합당한\n영광의 그 이름 예수',
    //     },
    //   ],
    // },
  ];

  const [selectedPraise, setSelectedPraise] = useState(
    praiseList.find((p) => p.id === 5) || praiseList[0]
  );

  return (
    <PageLayout title="찬양 | 아랍어" showTeamTabs={true}>
      {selectedTeam === 'jordan' ? (
        <>
          {/* 셀렉트 박스 */}
          <div className="mb-6 relative">
            <select
              value={selectedPraise?.id || ''}
              onChange={(e) => {
                const selected = praiseList.find(
                  (p) => p.id === parseInt(e.target.value)
                );
                if (selected) {
                  setSelectedPraise(selected);
                }
              }}
              className="w-full px-4 py-3 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] text-sm font-medium text-gray-900 dark:text-white appearance-none cursor-pointer hover:bg-gray-50 dark:hover:bg-[#2d2d2d] transition-colors"
              style={{ wordBreak: 'keep-all' }}
            >
              <optgroup label="수원하나교회">
                {praiseList
                  .filter((praise) => praise.title.includes('수원하나교회'))
                  .map((praise) => (
                    <option key={praise.id} value={praise.id}>
                      {praise.title.replace(' | 수원하나교회', '')}
                    </option>
                  ))}
              </optgroup>
              <optgroup label="뉴웨이교회">
                {praiseList
                  .filter((praise) => praise.title.includes('뉴웨이교회'))
                  .map((praise) => (
                    <option key={praise.id} value={praise.id}>
                      {praise.title.replace(' | 뉴웨이교회', '')}
                    </option>
                  ))}
              </optgroup>
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
              <ChevronDown className="w-5 h-5 text-gray-500 dark:text-gray-400" />
            </div>
          </div>

          {/* 선택된 찬양의 동영상과 가사 */}
          {selectedPraise ? (
            <>
              {/* YouTube 동영상 */}
              {selectedPraise.youtubeId && (
                <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] overflow-hidden">
                  <div className="aspect-video w-full">
                    <iframe
                      width="100%"
                      height="100%"
                      src={`https://www.youtube.com/embed/${selectedPraise.youtubeId}`}
                      title={selectedPraise.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}

              {/* 가사 */}
              <div className="mb-6 bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-6">
                <h3 className="text-base font-bold mb-4 text-gray-900 dark:text-white">
                  가사
                </h3>
                <div
                  className="space-y-6 text-sm leading-relaxed"
                  style={{ wordBreak: 'keep-all' }}
                >
                  {selectedPraise.lyrics.map((lyric, index) => (
                    <div key={index}>
                      {selectedPraise.id === 7 && index === 7 && (
                        <div className="my-6 border-t border-gray-300 dark:border-[#444444]"></div>
                      )}
                      <div className="space-y-2">
                        <p className="text-gray-600 dark:text-gray-400">
                          {lyric.korean}
                        </p>
                        <p className="text-gray-800 dark:text-white">
                          {lyric.pronunciation}
                        </p>
                        <p
                          className="text-gray-600 dark:text-gray-400 text-right"
                          dir="rtl"
                        >
                          {lyric.arabic}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          ) : (
            <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
              찬양을 선택해주세요
            </div>
          )}
        </>
      ) : (
        <div className="bg-white dark:bg-[#252525] rounded-lg shadow-sm border border-gray-200 dark:border-[#333333] p-8 text-center text-gray-500 dark:text-gray-400 text-sm">
          등록된 찬양이 없습니다
        </div>
      )}
    </PageLayout>
  );
}

export default Praise;

import { useState } from "react";
import {
  Card, Button, Input, Select, Textarea, Badge, Avatar,
  Alert, Progress, Skeleton, Switch, Checkbox, RadioGroup,
  Separator, Accordion, Stepper, Tabs, DancheongStripe,
} from "chae-ui";

/* ─── 결제 폼 ─── */
function PaymentCard() {
  return (
    <Card variant="changho" style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
        결제 정보
      </h3>
      <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 20 }}>
        전통 한옥 스테이 예약
      </p>
      <div style={{ display: "grid", gap: 14 }}>
        <Input label="예약자명" placeholder="홍길동" />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
          <Select label="객실" options={["안채", "사랑채", "별채"]} placeholder="선택..." />
          <Select label="인원" options={["1명", "2명", "3명", "4명"]} placeholder="선택..." />
        </div>
        <Textarea label="요청사항" placeholder="특별한 요청이 있으시면 작성해 주세요..." rows={2} />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end", marginTop: 4 }}>
          <Button variant="outline">취소</Button>
          <Button>예약하기</Button>
        </div>
      </div>
    </Card>
  );
}

/* ─── 팀 멤버 ─── */
function TeamCard() {
  const members = [
    { name: "김단청", role: "대목장", badge: "default" as const },
    { name: "이한지", role: "소목장", badge: "secondary" as const },
    { name: "박창호", role: "도편수", badge: "accent" as const },
  ];
  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
        장인 목록
      </h3>
      <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 16 }}>
        한옥 건축에 참여하는 장인들
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {members.map((m) => (
          <div key={m.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <Avatar name={m.name} size={36} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{m.name}</div>
              <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{m.role}</div>
            </div>
            <Badge variant={m.badge}>{m.role}</Badge>
          </div>
        ))}
      </div>
      <Separator style={{ margin: "16px 0" }} />
      <Button variant="outline" style={{ width: "100%" }}>장인 초대</Button>
    </Card>
  );
}

/* ─── 알림 모음 ─── */
function AlertsCard() {
  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
        알림
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Alert variant="info" title="상량식 안내">
          내일 오전 10시에 상량식이 진행됩니다.
        </Alert>
        <Alert variant="warning" title="자재 부족">
          소나무 목재 재고가 부족합니다.
        </Alert>
        <Alert variant="error" title="일정 지연">
          기와 공정이 3일 지연되었습니다.
        </Alert>
      </div>
    </Card>
  );
}

/* ─── 설정 ─── */
function SettingsCard() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);

  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
        환경설정
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        {[
          { label: "알림 수신", desc: "공사 진행 알림을 받습니다", checked: notifications, onChange: setNotifications },
          { label: "어두운 화면", desc: "먹색 테마를 사용합니다", checked: darkMode, onChange: setDarkMode },
          { label: "자동 저장", desc: "변경사항을 자동으로 저장합니다", checked: autoSave, onChange: setAutoSave },
        ].map((item) => (
          <div key={item.label} style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div>
              <div style={{ fontSize: 14, fontWeight: 500 }}>{item.label}</div>
              <div style={{ fontSize: 12, color: "var(--muted-foreground)" }}>{item.desc}</div>
            </div>
            <Switch checked={item.checked} onChange={() => item.onChange(!item.checked)} />
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ─── 공정 진행률 ─── */
function ProgressCard() {
  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
        공정 현황
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
        {[
          { label: "기초 공사", value: 100 },
          { label: "골조 (목구조)", value: 75 },
          { label: "지붕 (기와)", value: 40 },
          { label: "단청", value: 10 },
        ].map((item) => (
          <div key={item.label}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: 13, marginBottom: 6 }}>
              <span>{item.label}</span>
              <span style={{ color: "var(--muted-foreground)" }}>{item.value}%</span>
            </div>
            <Progress value={item.value} variant={item.label === "단청" ? "dancheong" : "default"} />
          </div>
        ))}
      </div>
      <Separator style={{ margin: "16px 0" }} />
      <Stepper steps={["기초", "골조", "지붕", "단청"]} current={1} />
    </Card>
  );
}

/* ─── 피드백 설문 ─── */
function SurveyCard() {
  const [satisfaction, setSatisfaction] = useState<string>("");
  const [agree, setAgree] = useState(false);

  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 4 }}>
        만족도 조사
      </h3>
      <p style={{ fontSize: 13, color: "var(--muted-foreground)", marginBottom: 16 }}>
        한옥 체험은 어떠셨나요?
      </p>
      <RadioGroup
        label="만족도"
        options={[
          { value: "5", label: "매우 만족" },
          { value: "4", label: "만족" },
          { value: "3", label: "보통" },
          { value: "2", label: "불만족" },
        ]}
        value={satisfaction}
        onChange={setSatisfaction}
      />
      <div style={{ marginTop: 16 }}>
        <Checkbox
          checked={agree}
          onChange={setAgree}
          label="결과를 홍보에 활용하는 데 동의합니다"
        />
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
        <Button disabled={!agree || !satisfaction}>제출</Button>
      </div>
    </Card>
  );
}

/* ─── 로딩 상태 ─── */
function LoadingCard() {
  return (
    <Card variant="hanzi" style={{ padding: 24 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
        <Skeleton width={40} height={40} radius={20} />
        <div style={{ flex: 1 }}>
          <Skeleton width="60%" height={14} />
          <div style={{ height: 6 }} />
          <Skeleton width="40%" height={12} />
        </div>
      </div>
      <Skeleton width="100%" height={12} />
      <div style={{ height: 6 }} />
      <Skeleton width="90%" height={12} />
      <div style={{ height: 6 }} />
      <Skeleton width="70%" height={12} />
      <div style={{ height: 16 }} />
      <Skeleton width="100%" height={120} radius={4} />
    </Card>
  );
}

/* ─── 탭 + 아코디언 ─── */
function FaqCard() {
  const [tab, setTab] = useState("faq");
  return (
    <Card style={{ padding: 24 }}>
      <h3 style={{ fontFamily: "var(--font-serif)", fontSize: 16, fontWeight: 700, marginBottom: 16 }}>
        도움말
      </h3>
      <Tabs
        tabs={[
          { id: "faq", label: "자주 묻는 질문" },
          { id: "guide", label: "이용 안내" },
        ]}
        activeTab={tab}
        onChange={setTab}
      />
      <div style={{ marginTop: 16 }}>
        {tab === "faq" ? (
          <Accordion
            items={[
              { title: "채 UI는 무엇인가요?", content: "한국 전통 건축 양식에서 영감을 얻은 shadcn/ui 기반 React UI 라이브러리입니다." },
              { title: "어떤 프레임워크를 지원하나요?", content: "React 18 이상을 지원합니다. Next.js, Vite, Remix 등에서 사용할 수 있습니다." },
              { title: "커스터마이즈가 가능한가요?", content: "CSS 변수를 통해 색상, 테두리, 폰트 등을 자유롭게 변경할 수 있습니다." },
            ]}
          />
        ) : (
          <div style={{ fontSize: 14, lineHeight: 1.7, color: "var(--muted-foreground)" }}>
            <p>1. <code style={{ background: "var(--muted)", padding: "2px 6px", borderRadius: 3, fontSize: 13 }}>pnpm add chae-ui</code>로 설치합니다.</p>
            <p style={{ marginTop: 8 }}>2. 컴포넌트를 import하여 사용합니다.</p>
            <p style={{ marginTop: 8 }}>3. CSS 변수로 테마를 커스터마이즈합니다.</p>
          </div>
        )}
      </div>
    </Card>
  );
}

/* ─── 메인 쇼케이스 그리드 ─── */
export function Showcase() {
  return (
    <section id="showcase" style={{ padding: "64px 40px", maxWidth: 960, margin: "0 auto" }}>
      <div style={{ textAlign: "center", marginBottom: 48 }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 32,
            fontWeight: 700,
            color: "var(--foreground)",
            marginBottom: 12,
          }}
        >
          부재로 짓는 한옥
        </h2>
        <p style={{ fontSize: 15, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
          단청의 색, 창호의 구조, 한지의 질감을 조합하여 실제 화면을 구성합니다.
        </p>
      </div>

      <DancheongStripe height={4} preset="geum" />
      <div style={{ height: 32 }} />

      <div className="showcase-grid">
        {/* Row 1: 결제(2col) + 팀(1col) */}
        <div className="span-2">
          <PaymentCard />
        </div>
        <div>
          <TeamCard />
        </div>

        {/* Row 2: 알림(1col) + 설정(1col) + 진행(1col) */}
        <AlertsCard />
        <SettingsCard />
        <ProgressCard />

        {/* Row 3: 설문(1col) + FAQ(1col) + 로딩(1col) */}
        <SurveyCard />
        <FaqCard />
        <LoadingCard />
      </div>

      <div style={{ height: 32 }} />
      <DancheongStripe height={4} preset="gutgi" />
    </section>
  );
}

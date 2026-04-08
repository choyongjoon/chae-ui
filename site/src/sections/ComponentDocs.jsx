import { useState } from "react";
import {
  Button, Card, Badge, Input, Textarea, Select, Checkbox, RadioGroup, Toggle,
  Alert, Toast, Progress, Skeleton, Separator, DancheongStripe, Tabs,
  Breadcrumb, Stepper, Accordion, Table, Avatar, ChanghoDialog,
} from "chae-ui";
import { PropsTable } from "../components/PropsTable";
import { CodeBlock } from "../components/CodeBlock";

function Section({ id, title, desc, importCode, propsData, children }) {
  return (
    <section id={id} style={{ padding: "56px 40px 0", maxWidth: 820, margin: "0 auto" }}>
      <h3
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: 20,
          fontWeight: 700,
          marginBottom: 6,
        }}
      >
        {title}
      </h3>
      {desc && (
        <p style={{ fontSize: 14, color: "var(--muted-foreground)", marginBottom: 12 }}>
          {desc}
        </p>
      )}
      <CodeBlock>{importCode}</CodeBlock>
      <div
        style={{
          marginTop: 20,
          padding: 24,
          border: "1px solid var(--border)",
          borderRadius: 4,
          background: "var(--card)",
        }}
      >
        {children}
      </div>
      {propsData && <PropsTable props={propsData} />}
      <div style={{ height: 24 }} />
    </section>
  );
}

function ButtonDemo() {
  return (
    <Section
      id="comp-button"
      title="Button"
      desc="7가지 variant와 3가지 size를 지원하는 버튼"
      importCode={`import { Button } from "chae-ui";`}
      propsData={[
        { name: "variant", type: "string", default: '"default"', desc: "default | secondary | accent | destructive | outline | ghost | dancheong" },
        { name: "size", type: "string", default: '"default"', desc: "sm | default | lg" },
        { name: "children", type: "ReactNode", desc: "버튼 내용" },
        { name: "style", type: "CSSProperties", default: "{}", desc: "추가 스타일" },
      ]}
    >
      <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 16 }}>
        {["default", "secondary", "accent", "destructive", "outline", "ghost", "dancheong"].map((v) => (
          <Button key={v} variant={v}>{v}</Button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
      </div>
    </Section>
  );
}

function CardDemo() {
  return (
    <Section
      id="comp-card"
      title="Card"
      desc="5가지 variant를 지원하는 카드 컨테이너"
      importCode={`import { Card } from "chae-ui";`}
      propsData={[
        { name: "variant", type: "string", default: '"default"', desc: "default | changho | hanzi | dancheong | stone" },
        { name: "children", type: "ReactNode", desc: "카드 내용" },
        { name: "style", type: "CSSProperties", default: "{}", desc: "추가 스타일" },
      ]}
    >
      <div style={{ display: "grid", gap: 12 }}>
        {["default", "changho", "hanzi", "dancheong", "stone"].map((v) => (
          <Card key={v} variant={v} style={{ padding: 16 }}>
            <strong>{v}</strong> variant
          </Card>
        ))}
      </div>
    </Section>
  );
}

function BadgeDemo() {
  return (
    <Section
      id="comp-badge"
      title="Badge"
      desc="5가지 variant를 지원하는 뱃지"
      importCode={`import { Badge } from "chae-ui";`}
      propsData={[
        { name: "variant", type: "string", default: '"default"', desc: "default | secondary | destructive | accent | outline" },
        { name: "children", type: "ReactNode", desc: "뱃지 내용" },
      ]}
    >
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {["default", "secondary", "destructive", "accent", "outline"].map((v) => (
          <Badge key={v} variant={v}>{v}</Badge>
        ))}
      </div>
    </Section>
  );
}

function InputDemo() {
  return (
    <Section
      id="comp-input"
      title="Input"
      desc="라벨과 variant를 지원하는 텍스트 입력"
      importCode={`import { Input } from "chae-ui";`}
      propsData={[
        { name: "label", type: "string", desc: "입력 라벨" },
        { name: "variant", type: "string", default: '"default"', desc: "default | hanzi | changho" },
        { name: "placeholder", type: "string", desc: "플레이스홀더" },
      ]}
    >
      <div style={{ display: "grid", gap: 16, maxWidth: 320 }}>
        <Input label="Default" placeholder="입력하세요..." />
        <Input label="Hanzi" variant="hanzi" placeholder="한지 스타일" />
        <Input label="Changho" variant="changho" placeholder="창호 스타일" />
      </div>
    </Section>
  );
}

function TextareaDemo() {
  return (
    <Section
      id="comp-textarea"
      title="Textarea"
      desc="여러 줄 텍스트 입력"
      importCode={`import { Textarea } from "chae-ui";`}
      propsData={[
        { name: "label", type: "string", desc: "라벨" },
        { name: "placeholder", type: "string", desc: "플레이스홀더" },
        { name: "rows", type: "number", default: "3", desc: "줄 수" },
      ]}
    >
      <Textarea label="메모" placeholder="내용을 입력하세요..." rows={3} />
    </Section>
  );
}

function SelectDemo() {
  const [val, setVal] = useState("");
  return (
    <Section
      id="comp-select"
      title="Select"
      desc="드롭다운 선택 입력"
      importCode={`import { Select } from "chae-ui";`}
      propsData={[
        { name: "label", type: "string", desc: "라벨" },
        { name: "options", type: "string[]", default: "[]", desc: "선택 옵션 배열" },
        { name: "value", type: "string", desc: "현재 값" },
        { name: "onChange", type: "function", desc: "변경 콜백" },
        { name: "placeholder", type: "string", default: '"선택..."', desc: "플레이스홀더" },
      ]}
    >
      <div style={{ maxWidth: 320 }}>
        <Select
          label="계절"
          options={["봄", "여름", "가을", "겨울"]}
          value={val}
          onChange={setVal}
        />
      </div>
    </Section>
  );
}

function CheckboxDemo() {
  const [checked, setChecked] = useState(false);
  return (
    <Section
      id="comp-checkbox"
      title="Checkbox"
      desc="체크박스 입력"
      importCode={`import { Checkbox } from "chae-ui";`}
      propsData={[
        { name: "checked", type: "boolean", desc: "체크 상태" },
        { name: "onChange", type: "function", desc: "변경 콜백" },
        { name: "label", type: "string", desc: "라벨" },
      ]}
    >
      <Checkbox checked={checked} onChange={() => setChecked(!checked)} label="동의합니다" />
    </Section>
  );
}

function RadioGroupDemo() {
  const [val, setVal] = useState("cheong");
  return (
    <Section
      id="comp-radiogroup"
      title="RadioGroup"
      desc="라디오 버튼 그룹"
      importCode={`import { RadioGroup } from "chae-ui";`}
      propsData={[
        { name: "options", type: "string[]", default: "[]", desc: "선택 옵션 배열" },
        { name: "value", type: "string", desc: "현재 값" },
        { name: "onChange", type: "function", desc: "변경 콜백" },
        { name: "label", type: "string", desc: "그룹 라벨" },
      ]}
    >
      <RadioGroup
        label="색상 선택"
        options={["cheong", "jeok", "hwang"]}
        value={val}
        onChange={setVal}
      />
    </Section>
  );
}

function ToggleDemo() {
  const [on, setOn] = useState(false);
  return (
    <Section
      id="comp-toggle"
      title="Toggle"
      desc="온/오프 토글 스위치"
      importCode={`import { Toggle } from "chae-ui";`}
      propsData={[
        { name: "checked", type: "boolean", default: "false", desc: "토글 상태" },
        { name: "onChange", type: "function", desc: "변경 콜백" },
      ]}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <Toggle checked={on} onChange={() => setOn(!on)} />
        <span style={{ fontSize: 14 }}>{on ? "켜짐" : "꺼짐"}</span>
      </div>
    </Section>
  );
}

function AlertDemo() {
  return (
    <Section
      id="comp-alert"
      title="Alert"
      desc="3가지 시맨틱 variant (info=청, warning=황, error=적)"
      importCode={`import { Alert } from "chae-ui";`}
      propsData={[
        { name: "variant", type: "string", default: '"info"', desc: "info | warning | error" },
        { name: "title", type: "string", desc: "알림 제목" },
        { name: "children", type: "ReactNode", desc: "알림 내용" },
      ]}
    >
      <div style={{ display: "grid", gap: 12 }}>
        <Alert variant="info" title="안내">일반 정보 메시지입니다.</Alert>
        <Alert variant="warning" title="주의">주의가 필요한 메시지입니다.</Alert>
        <Alert variant="error" title="오류">오류가 발생했습니다.</Alert>
      </div>
    </Section>
  );
}

function ToastDemo() {
  const [toastVar, setToastVar] = useState(null);

  const showToast = (variant) => {
    setToastVar(variant);
    setTimeout(() => setToastVar(null), 2000);
  };

  return (
    <Section
      id="comp-toast"
      title="Toast"
      desc="하단 고정 토스트 알림 (3가지 variant)"
      importCode={`import { Toast } from "chae-ui";`}
      propsData={[
        { name: "message", type: "string", desc: "메시지 내용" },
        { name: "variant", type: "string", default: '"default"', desc: "default | success | error" },
        { name: "visible", type: "boolean", desc: "표시 여부" },
      ]}
    >
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="default" size="sm" onClick={() => showToast("default")}>Default</Button>
        <Button variant="accent" size="sm" onClick={() => showToast("success")}>Success</Button>
        <Button variant="destructive" size="sm" onClick={() => showToast("error")}>Error</Button>
      </div>
      <p style={{ fontSize: 12, color: "var(--muted-foreground)", marginTop: 12 }}>
        버튼을 클릭하면 하단에 2초간 토스트가 표시됩니다.
      </p>
      <Toast message={toastVar === "success" ? "성공!" : toastVar === "error" ? "오류 발생" : "알림 메시지"} variant={toastVar || "default"} visible={!!toastVar} />
    </Section>
  );
}

function ProgressDemo() {
  return (
    <Section
      id="comp-progress"
      title="Progress"
      desc="3가지 variant를 지원하는 진행 표시줄"
      importCode={`import { Progress } from "chae-ui";`}
      propsData={[
        { name: "value", type: "number", default: "0", desc: "진행 값 (0-100)" },
        { name: "variant", type: "string", default: '"default"', desc: "default | dancheong | seok" },
      ]}
    >
      <div style={{ display: "grid", gap: 16 }}>
        <div>
          <span style={{ fontSize: 13, marginBottom: 4, display: "block" }}>default</span>
          <Progress value={65} variant="default" />
        </div>
        <div>
          <span style={{ fontSize: 13, marginBottom: 4, display: "block" }}>dancheong</span>
          <Progress value={75} variant="dancheong" />
        </div>
        <div>
          <span style={{ fontSize: 13, marginBottom: 4, display: "block" }}>seok</span>
          <Progress value={45} variant="seok" />
        </div>
      </div>
    </Section>
  );
}

function SkeletonDemo() {
  return (
    <Section
      id="comp-skeleton"
      title="Skeleton"
      desc="로딩 상태 표시용 스켈레톤"
      importCode={`import { Skeleton } from "chae-ui";`}
      propsData={[
        { name: "width", type: "string | number", default: '"100%"', desc: "너비" },
        { name: "height", type: "number", default: "16", desc: "높이" },
        { name: "radius", type: "number", default: "4", desc: "모서리 반경" },
      ]}
    >
      <div style={{ display: "grid", gap: 8 }}>
        <Skeleton width="60%" height={20} />
        <Skeleton width="100%" height={14} />
        <Skeleton width="80%" height={14} />
        <div style={{ display: "flex", gap: 12, marginTop: 8 }}>
          <Skeleton width={48} height={48} radius={24} />
          <div style={{ flex: 1, display: "grid", gap: 6 }}>
            <Skeleton width="40%" height={16} />
            <Skeleton width="70%" height={12} />
          </div>
        </div>
      </div>
    </Section>
  );
}

function SeparatorDemo() {
  return (
    <Section
      id="comp-separator"
      title="Separator"
      desc="구분선 (default, dancheong)"
      importCode={`import { Separator } from "chae-ui";`}
      propsData={[
        { name: "variant", type: "string", default: '"default"', desc: "default | dancheong" },
        { name: "label", type: "string", desc: "구분선 위 라벨" },
      ]}
    >
      <div style={{ display: "grid", gap: 20 }}>
        <Separator />
        <Separator label="또는" />
        <Separator variant="dancheong" />
      </div>
    </Section>
  );
}

function DancheongStripeDemo() {
  return (
    <Section
      id="comp-dancheongstripe"
      title="DancheongStripe"
      desc="단청 색띠 (그라디언트 아님, 4가지 프리셋)"
      importCode={`import { DancheongStripe } from "chae-ui";`}
      propsData={[
        { name: "height", type: "number", default: "8", desc: "색띠 높이(px)" },
        { name: "preset", type: "string", default: '"default"', desc: "default | geum | gachil | gutgi" },
        { name: "colors", type: "array", desc: "커스텀 색상 배열 [{color, flex}]" },
      ]}
    >
      <div style={{ display: "grid", gap: 16 }}>
        {["default", "geum", "gachil", "gutgi"].map((p) => (
          <div key={p}>
            <span style={{ fontSize: 13, marginBottom: 4, display: "block" }}>{p}</span>
            <DancheongStripe height={10} preset={p} />
          </div>
        ))}
      </div>
    </Section>
  );
}

function TabsDemo() {
  const [active, setActive] = useState("tab1");
  return (
    <Section
      id="comp-tabs"
      title="Tabs"
      desc="탭 내비게이션"
      importCode={`import { Tabs } from "chae-ui";`}
      propsData={[
        { name: "tabs", type: "Array<{id, label}>", desc: "탭 목록" },
        { name: "activeTab", type: "string", desc: "활성 탭 ID" },
        { name: "onChange", type: "function", desc: "탭 변경 콜백" },
      ]}
    >
      <Tabs
        tabs={[
          { id: "tab1", label: "안채" },
          { id: "tab2", label: "사랑채" },
          { id: "tab3", label: "별채" },
        ]}
        activeTab={active}
        onChange={setActive}
      />
    </Section>
  );
}

function BreadcrumbDemo() {
  return (
    <Section
      id="comp-breadcrumb"
      title="Breadcrumb"
      desc="경로 내비게이션"
      importCode={`import { Breadcrumb } from "chae-ui";`}
      propsData={[
        { name: "items", type: "string[]", desc: "경로 항목 배열" },
      ]}
    >
      <Breadcrumb items={["홈", "컴포넌트", "Breadcrumb"]} />
    </Section>
  );
}

function StepperDemo() {
  return (
    <Section
      id="comp-stepper"
      title="Stepper"
      desc="석탑 스타일 단계 표시 (직각, 0 border-radius)"
      importCode={`import { Stepper } from "chae-ui";`}
      propsData={[
        { name: "steps", type: "string[]", desc: "단계 이름 배열" },
        { name: "current", type: "number", default: "0", desc: "현재 단계 인덱스" },
      ]}
    >
      <Stepper steps={["정보 입력", "확인", "완료"]} current={1} />
    </Section>
  );
}

function AccordionDemo() {
  return (
    <Section
      id="comp-accordion"
      title="Accordion"
      desc="창호 테두리 아코디언"
      importCode={`import { Accordion } from "chae-ui";`}
      propsData={[
        { name: "items", type: "Array<{title, content}>", desc: "아코디언 항목 배열" },
      ]}
    >
      <Accordion
        items={[
          { title: "채 UI란?", content: "한국 전통 건축 양식에서 영감을 받은 React UI 디자인 시스템입니다." },
          { title: "설치 방법", content: "npm install chae-ui로 설치할 수 있습니다." },
          { title: "shadcn/ui와의 관계", content: "shadcn/ui의 컴포넌트 구조를 기반으로 한국 전통 미학을 적용했습니다." },
        ]}
      />
    </Section>
  );
}

function TableDemo() {
  return (
    <Section
      id="comp-table"
      title="Table"
      desc="창호 테두리 테이블"
      importCode={`import { Table } from "chae-ui";`}
      propsData={[
        { name: "columns", type: "string[]", desc: "컬럼 헤더 배열" },
        { name: "rows", type: "string[][]", desc: "행 데이터 (2차원 배열)" },
      ]}
    >
      <Table
        columns={["이름", "색상", "방위"]}
        rows={[
          ["청", "#2B6B5E", "동"],
          ["적", "#C23B3B", "남"],
          ["황", "#D4A843", "중앙"],
        ]}
      />
    </Section>
  );
}

function AvatarDemo() {
  return (
    <Section
      id="comp-avatar"
      title="Avatar"
      desc="원형 아바타 (이니셜 표시)"
      importCode={`import { Avatar } from "chae-ui";`}
      propsData={[
        { name: "name", type: "string", desc: "이름 (이니셜 추출)" },
        { name: "size", type: "number", default: "40", desc: "크기(px)" },
      ]}
    >
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <Avatar name="채" size={32} />
        <Avatar name="UI" size={40} />
        <Avatar name="한옥" size={48} />
      </div>
    </Section>
  );
}

function ChanghoDialogDemo() {
  const [open, setOpen] = useState(false);
  return (
    <Section
      id="comp-changhodialog"
      title="ChanghoDialog"
      desc="창호 디자인 다이얼로그 (DancheongStripe 헤더)"
      importCode={`import { ChanghoDialog } from "chae-ui";`}
      propsData={[
        { name: "open", type: "boolean", desc: "열림 상태" },
        { name: "onClose", type: "function", desc: "닫기 콜백" },
        { name: "title", type: "string", desc: "다이얼로그 제목" },
        { name: "children", type: "ReactNode", desc: "내용" },
      ]}
    >
      <Button variant="outline" onClick={() => setOpen(true)}>
        Dialog 열기
      </Button>
      <ChanghoDialog open={open} onClose={() => setOpen(false)} title="창호 다이얼로그">
        <p style={{ fontFamily: "var(--font-sans)", fontSize: 14, lineHeight: 1.6 }}>
          창호(窓戶)는 한옥의 문과 창을 통칭하는 말입니다.
          나무 격자 위에 한지를 바르는 전통 방식을 모던 UI에 반영했습니다.
        </p>
      </ChanghoDialog>
    </Section>
  );
}

export function ComponentDocs() {
  return (
    <div>
      <div style={{ padding: "64px 40px 0", maxWidth: 820, margin: "0 auto" }}>
        <h2
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 28,
            fontWeight: 700,
            marginBottom: 8,
          }}
        >
          컴포넌트
        </h2>
        <p style={{ fontSize: 14, color: "var(--muted-foreground)", lineHeight: 1.6 }}>
          22개의 React 컴포넌트. 각 컴포넌트는 한국 전통 건축의 요소를 반영합니다.
        </p>
      </div>
      <ButtonDemo />
      <CardDemo />
      <BadgeDemo />
      <InputDemo />
      <TextareaDemo />
      <SelectDemo />
      <CheckboxDemo />
      <RadioGroupDemo />
      <ToggleDemo />
      <AlertDemo />
      <ToastDemo />
      <ProgressDemo />
      <SkeletonDemo />
      <SeparatorDemo />
      <DancheongStripeDemo />
      <TabsDemo />
      <BreadcrumbDemo />
      <StepperDemo />
      <AccordionDemo />
      <TableDemo />
      <AvatarDemo />
      <ChanghoDialogDemo />
    </div>
  );
}

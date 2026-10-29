import { Alert } from "./Alert";
import { Quiz } from "./Quiz";
import { GlassCard } from "./GlassCard";
import { CodeBlock } from "./CodeBlock";
import { FlowChart } from "./FlowChart";
import { MotionH2, MotionH3, MotionTable } from "./MotionElements";
import {
    MDXP,
    MDXUl,
    MDXOl,
    MDXA,
    MDXThead,
    MDXTbody,
    MDXTr,
    MDXTh,
    MDXTd,
    MDXHr,
    MDXCode
} from "./ScientificTypography";
import { MDXPre } from "./MDXPre";
import {
    StepEngagement,
    StepKnowledge,
    StepPractice,
    StepApplication,
    TeacherNotes,
    RawContent
} from "./LessonSteps";

// Specialized 5512 Pedagogical & Presentation System
import {
    LessonPlanHeader,
    LearningObjectives,
    EquipmentChecklist,
    PedagogyActivity,
    SubTask,
    SlideStep,
} from "./PedagogyComponents";
import { ClassTimer } from "./ClassTimer";
import { HtmlLiveSandbox } from "./HtmlLiveSandbox";
import { HtmlTreeVisualizer } from "./HtmlTreeVisualizer";
import { HtmlDebuggerChallenge } from "./HtmlDebuggerChallenge";
import { SpeedQuizExercise } from "./InteractiveExercise";
import { RubricCard } from "./RubricCard";
import { ToolComparisonTable } from "./ToolComparison";
import { HtmlElementAnatomy } from "./HtmlElementAnatomy";
import { AiFacultiesVisualizer } from "./AiFacultiesVisualizer";
import { NetworkTopologyVisualizer } from "./NetworkTopologyVisualizer";
import { LanConfiguratorSimulator } from "./LanConfiguratorSimulator";
import { CyberSafetyScenario } from "./CyberSafetyScenario";

export const MdxComponents = {
    // Custom Scientific Components
    Alert: Alert,
    Quiz: Quiz,
    GlassCard: GlassCard,
    CodeBlock: CodeBlock,
    FlowChart: FlowChart,

    // Standard MDX Elements - Stable Mappings
    h2: MotionH2,
    h3: MotionH3,
    p: MDXP,
    ul: MDXUl,
    ol: MDXOl,
    a: MDXA,
    table: MotionTable,
    thead: MDXThead,
    tbody: MDXTbody,
    tr: MDXTr,
    th: MDXTh,
    td: MDXTd,
    hr: MDXHr,
    pre: MDXPre,
    code: MDXCode,

    // Lesson Steps (5512 Legacy)
    StepEngagement: StepEngagement,
    StepKnowledge: StepKnowledge,
    StepPractice: StepPractice,
    StepApplication: StepApplication,
    TeacherNotes: TeacherNotes,
    RawContent: RawContent,

    // Upgraded 5512 Deep Pedagogical System
    LessonPlanHeader: LessonPlanHeader,
    LearningObjectives: LearningObjectives,
    EquipmentChecklist: EquipmentChecklist,
    PedagogyActivity: PedagogyActivity,
    SubTask: SubTask,
    SlideStep: SlideStep,
    ClassTimer: ClassTimer,
    HtmlLiveSandbox: HtmlLiveSandbox,
    HtmlTreeVisualizer: HtmlTreeVisualizer,
    HtmlDebuggerChallenge: HtmlDebuggerChallenge,
    SpeedQuizExercise: SpeedQuizExercise,
    RubricCard: RubricCard,
    ToolComparisonTable: ToolComparisonTable,
    HtmlElementAnatomy: HtmlElementAnatomy,
    AiFacultiesVisualizer: AiFacultiesVisualizer,
    NetworkTopologyVisualizer: NetworkTopologyVisualizer,
    LanConfiguratorSimulator: LanConfiguratorSimulator,
    CyberSafetyScenario: CyberSafetyScenario,
};

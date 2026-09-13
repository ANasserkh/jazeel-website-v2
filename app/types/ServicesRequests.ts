enum services {
  ProposalBuilding = 1,
  TechnicalDesign = 2,
  SpecialistQualification = 3,
  UnitEstablishment = 4,
  ProjectManagement = 5,
  ProcessModeling = 6,
  FundraisingQualification = 7,
  FundraisingUnit = 8,
  JazeelHour = 9,
}

const servicesList = [
  {
    id: services.ProposalBuilding,
    title: "بناء مقترحات المشاريع التنموية",
    description:
      "نساعدك في صياغة مقترحات مشاريع احترافية ترفع من فرص قبولك لدى المانحين.",
    tag: "لرفع معدل القبول",
    color: "blue",
  },
  {
    id: services.JazeelHour,
    title: "ساعة جزيل",
    description:
      "خدمة الساعات الاستشارية للجمعيات الأهلية للاجابة عن استفسارات المنح واليات الاجابة عليها.",
    tag: "كفاءة تشغيلية",
    color: "jgreen",
    price: 500,
    payment: true,
  },
  {
    id: services.TechnicalDesign,
    title: "التصميم الفني للمشاريع التنموية",
    description:
      "تصميم هيكلي وفني دقيق للمشاريع يضمن كفاءة التنفيذ وتحقيق الأثر المنشود.",
    tag: "تصميم احترافي",
    color: "purple",
  },
  {
    id: services.TechnicalDesign,
    title: "التصميم الفني للمشاريع التنموية",
    description:
      "تصميم هيكلي وفني دقيق للمشاريع يضمن كفاءة التنفيذ وتحقيق الأثر المنشود.",
    tag: "تصميم احترافي",
    color: "purple",
  },
  {
    id: services.SpecialistQualification,
    title: "تأهيل أخصائي المشاريع التنموية",
    description:
      "برنامج تدريبي مكثف لتأهيل الكوادر البشرية على أفضل ممارسات إدارة المشاريع.",
    tag: "تطوير الكوادر",
    color: "jgreen",
  },
  {
    id: services.UnitEstablishment,
    title: "تأسيس وحدة البرامج والمشاريع",
    description:
      "بناء الهياكل الإدارية والعمليات اللازمة لتأسيس وحدة برامج ومشاريع قوية.",
    tag: "تأسيس مؤسسي",
    color: "navy",
  },
  {
    id: services.ProjectManagement,
    title: "إدارة المشاريع التنموية",
    description:
      "إشراف مباشر ومتابعة حثيثة لتنفيذ المشاريع لضمان الجودة والالتزام بالجداول الزمنية.",
    tag: "إدارة متكاملة",
    color: "blue",
  },
  {
    id: services.ProcessModeling,
    title: "نمذجة الإجراءات والعمليات في إدارة المشاريع التنموية",
    description:
      "تحويل العمليات المعقدة إلى نماذج واضحة وسهلة التنفيذ تضمن استدامة العمل.",
    tag: "كفاءة تشغيلية",
    color: "purple",
  },
  {
    id: services.FundraisingQualification,
    title: "تأهيل وتمكين أخصائي ادارة تنمية الموارد المالية",
    description:
      "تمكين المسؤولين عن تنمية الموارد بأدوات ومهارات الاستدامة المالية الحديثة.",
    tag: "استدامة مالية",
    color: "jgreen",
  },
  {
    id: services.FundraisingUnit,
    title: "تأسيس وحدة تنمية الموارد المالية",
    description:
      "تطوير استراتيجيات وأنظمة متكاملة لجذب الموارد المالية وضمان نمو المنظمة.",
    tag: "نمو مستدام",
    color: "navy",
  },
];

export { services, servicesList };

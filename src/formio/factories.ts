/* eslint-disable @typescript-eslint/no-unused-vars */
// istanbul ignore file
import { factory } from "node-factory";
import type {
  CheckboxSchema,
  ColumnsSchema,
  ContainerSchema,
  FieldsetSchema,
  FlatFormSchema,
  InputOption,
  PanelSchema,
  RadioSchema,
  SelectBoxesSchema,
  SelectSchema,
  WizardFormSchema,
  WellSchema,
  AnyComponentSchema,
} from "./types";

const SEED = 123;

export const FormFactory = factory<FlatFormSchema>((fake) => {
  const name = fake.lorem.words(2);
  return {
    type: "form",
    display: "form",
    name,
    path: fake.helpers.slugify(name),
    // NB: these aren't exactly like the 17-character GUIDs that formio uses,
    // but they'll do
    _id: fake.datatype.uuid(),
    project: fake.datatype.uuid(),
    owner: fake.datatype.uuid(),
    components: ComponentFactory.make(3),
  };
});

export const WizardFactory = factory<WizardFormSchema>(() => {
  let i = 1;
  return {
    ...FormFactory.make(),
    display: "wizard",
    components: PageFactory.seed(SEED).make(3, () => ({
      title: `Page ${i++}`,
    })),
  } as WizardFormSchema;
});

export const ComponentFactory = factory<AnyComponentSchema>((fake) => {
  const label = fake.lorem.words(2);
  return {
    type: "textfield",
    label,
    key: fake.helpers.slugify(label),
    validate: {
      required: false,
    },
  };
});

export const ContainerComponentFactory = factory<ContainerSchema>((fake) => {
  return {
    type: "container",
    key: fake.lorem.word(5),
    input: true,
    components: ComponentFactory.seed(SEED).make(3),
  };
});

export const PageFactory = factory<PanelSchema>((fake) => {
  const title = fake.company.catchPhrase();
  return {
    type: "panel",
    title,
    key: fake.helpers.slugify(title),
    components: ComponentFactory.seed(SEED).make(2),
  };
});

export const WellFactory = factory<WellSchema>((fake) => {
  return {
    type: "well",
    components: ComponentFactory.make(3),
  };
});

export const FieldsetFactory = factory<FieldsetSchema>((fake) => {
  return {
    type: "fieldset",
    legend: "Fieldset",
    collapsible: false,
    components: ComponentFactory.make(3),
  };
});

export const OptionFactory = factory<InputOption>((fake) => {
  const label = fake.lorem.word();
  return {
    label,
    value: fake.helpers.slugify(label),
  };
});

export const CheckboxFactory = factory<CheckboxSchema>((fake) => {
  const name = fake.lorem.word();
  const label = fake.lorem.paragraph();
  return {
    name,
    label,
    type: "checkbox",
    value: "true",
  };
});

export const RadioFactory = factory<RadioSchema>((fake) => {
  return {
    type: "radio",
    values: OptionFactory.make(5),
  };
});

export const SelectBoxesFactory = factory<SelectBoxesSchema>((fake) => {
  return {
    type: "selectboxes",
    values: OptionFactory.make(5),
  };
});

export const SelectFactory = factory<SelectSchema>((fake) => {
  return {
    type: "select",
    widget: "html5",
    dataSrc: "values",
    data: {
      values: OptionFactory.make(10),
    },
  };
});

export const ColumnsFactory = factory<ColumnsSchema>((fake) => {
  return {
    type: "columns",
    columns: [
      {
        components: ComponentFactory.make(1),
        width: 6,
      },
      {
        components: ComponentFactory.make(1),
        width: 6,
      },
    ],
  };
});

export const MailingAddressFactory = factory<ContainerSchema>((fake) => {
  return ContainerComponentFactory.make({
    label: "Mailing address",
    components: [
      WellFactory.make({
        label: "Mailing address well (this label will not be shown)",
        key: "mailingAddressWell",
        components: [
          {
            type: "fieldset",
            legend: "Address",
            key: "mailingAddressFieldset",
            label: "Address",
            tableView: false,
            components: [
              {
                label: "Address line 1",
                key: "line1",
                type: "textfield",
                input: true,
                validate: {
                  required: true,
                },
                tableView: true,
              },
              {
                label: "Address line 2",
                key: "line2",
                type: "textfield",
                input: true,
                tableView: true,
              },
              {
                label: "City",
                type: "textfield",
                key: "city",
                input: true,
                validate: {
                  required: true,
                },
                tableView: true,
              },
              {
                type: "columns",
                key: "addressStateAndZIP",
                tableView: false,
                columns: [
                  {
                    width: 6,
                    components: [
                      {
                        type: "select",
                        label: "State",
                        widget: "html5",
                        customClass: "mb-2 mb-md-0",
                        tableView: true,
                        data: {
                          values: US_STATE_VALUES,
                        },
                        template: "{{ item.label }}",
                        validate: {
                          required: true,
                        },
                        key: "state",
                        tags: ["shared"],
                        lazyLoad: false,
                        input: true,
                        hideOnChildrenHidden: false,
                      },
                    ],
                    offset: 0,
                    push: 0,
                    pull: 0,
                    size: "md",
                    currentWidth: 6,
                  },
                  {
                    label: "Columns",
                    width: 6,
                    components: [
                      {
                        label: "ZIP code",
                        type: "textfield",
                        key: "zip",
                        input: true,
                        validate: {
                          maxLength: 10,
                          pattern: "([0-9]{5}(-[0-9]{4})?)?",
                          required: true,
                        },
                        errors: {
                          pattern:
                            'Please enter a 5-digit <a href="https://en.wikipedia.org/wiki/ZIP_Code">ZIP code</a>',
                        },
                        hideOnChildrenHidden: false,
                        tableView: true,
                      },
                    ],
                    offset: 0,
                    push: 0,
                    pull: 0,
                    size: "md",
                    currentWidth: 6,
                  },
                ],
              } as ColumnsSchema,
            ],
          } as FieldsetSchema,
        ],
      }),
    ],
  });
});

const US_STATE_VALUES = [
  {
    label: "Alabama",
    value: "AL",
  },
  {
    label: "Alaska",
    value: "AK",
  },
  {
    label: "American Samoa",
    value: "AS",
  },
  {
    label: "Arizona",
    value: "AZ",
  },
  {
    label: "Arkansas",
    value: "AR",
  },
  {
    label: "California",
    value: "CA",
  },
  {
    label: "Colorado",
    value: "CO",
  },
  {
    label: "Connecticut",
    value: "CT",
  },
  {
    label: "Delaware",
    value: "DE",
  },
  {
    label: "District of Columbia",
    value: "DC",
  },
  {
    label: "Florida",
    value: "FL",
  },
  {
    label: "Georgia",
    value: "GA",
  },
  {
    label: "Guam",
    value: "GU",
  },
  {
    label: "Hawaii",
    value: "HI",
  },
  {
    label: "Idaho",
    value: "ID",
  },
  {
    label: "Illinois",
    value: "IL",
  },
  {
    label: "Indiana",
    value: "IN",
  },
  {
    label: "Iowa",
    value: "IA",
  },
  {
    label: "Kansas",
    value: "KS",
  },
  {
    label: "Kentucky",
    value: "KY",
  },
  {
    label: "Louisiana",
    value: "LA",
  },
  {
    label: "Maine",
    value: "ME",
  },
  {
    label: "Maryland",
    value: "MD",
  },
  {
    label: "Massachusetts",
    value: "MA",
  },
  {
    label: "Michigan",
    value: "MI",
  },
  {
    label: "Minnesota",
    value: "MN",
  },
  {
    label: "Mississippi",
    value: "MS",
  },
  {
    label: "Missouri",
    value: "MO",
  },
  {
    label: "Montana",
    value: "MT",
  },
  {
    label: "Nebraska",
    value: "NE",
  },
  {
    label: "Nevada",
    value: "NV",
  },
  {
    label: "New Hampshire",
    value: "NH",
  },
  {
    label: "New Jersey",
    value: "NJ",
  },
  {
    label: "New Mexico",
    value: "NM",
  },
  {
    label: "New York",
    value: "NY",
  },
  {
    label: "North Carolina",
    value: "NC",
  },
  {
    label: "North Dakota",
    value: "ND",
  },
  {
    label: "Northern Mariana Islands",
    value: "MP",
  },
  {
    label: "Ohio",
    value: "OH",
  },
  {
    label: "Oklahoma",
    value: "OK",
  },
  {
    label: "Oregon",
    value: "OR",
  },
  {
    label: "Pennsylvania",
    value: "PA",
  },
  {
    label: "Puerto Rico",
    value: "PR",
  },
  {
    label: "Rhode Island",
    value: "RI",
  },
  {
    label: "South Carolina",
    value: "SC",
  },
  {
    label: "South Dakota",
    value: "SD",
  },
  {
    label: "Tennessee",
    value: "TN",
  },
  {
    label: "Texas",
    value: "TX",
  },
  {
    label: "Utah",
    value: "UT",
  },
  {
    label: "Vermont",
    value: "VT",
  },
  {
    label: "Virgin Islands",
    value: "VI",
  },
  {
    label: "Virginia",
    value: "VA",
  },
  {
    label: "Washington",
    value: "WA",
  },
  {
    label: "West Virginia",
    value: "WV",
  },
  {
    label: "Wisconsin",
    value: "WI",
  },
  {
    label: "Wyoming",
    value: "WY",
  },
];

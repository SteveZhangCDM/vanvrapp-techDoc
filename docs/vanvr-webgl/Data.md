::: info Data
Files listed here are related to data.
:::

**SpecimenStore.cs:** Responsible for accessing and distributing all specimens and related content.

**RegionIcon.cs:** Responsible for accessing and distributing all specimens and related content.

**RegionIcon.cs:** A small serializable class for keeping track of icons assigned to regions (for the Shelf menu in Tray Mode).

**AnnotationData.cs:** Used for deserializing annotation data from JSON.

**AnnotationNullablePosition.cs:** For deserializing annotation positions. A wrapper class that AnnotationData.cs can use to extract either a Vector3 or a global = true.

**DataManifest.cs:** For deserializing the root of manifest.json

**LabData.cs:** For deserializing lab data.

**RegionData.cs:** For deserializing region data.

**SpecimenRequestData.cs:** For deserializing specimen data from the manifest; is transformed into SpecimenData once loaded.

**ContentBlockData.cs:** Holds parsed data from the content of an annotation. Used to generate rich media annotation content.

**SpecimenData.cs:** Holds active specimen data, including links to the mesh/texture/material and parsed ContentBlockData once the asset bundle is loaded.

**DataLoader.cs:** Spawned by SpecimenStore and responsible for all processes related to fetching manifest.json and online asset bundles.

**LocalDataLoader.cs:** Extends DataLoader. For fetching a manifest located at manifestPath from Resources within the project.

**RemoteDataLoader.cs:** Extends DataLoader. Connect MongoDB database. For fetching a mongo data.

**AnnotationParser.cs:** For converting strings of annotation content to lists of ContentBlock
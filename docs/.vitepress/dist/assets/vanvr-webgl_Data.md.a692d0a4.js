import{o as t,c as n,a as e}from"./app.8f3ad78e.js";const a='{"title":"","description":"","frontmatter":{},"relativePath":"vanvr-webgl/Data.md","lastUpdated":1630365094852}',o={},s=[e('<div class="info custom-block"><p class="custom-block-title">Data</p><p>Files listed here are related to data.</p></div><p><strong>SpecimenStore.cs:</strong> Responsible for accessing and distributing all specimens and related content.</p><p><strong>RegionIcon.cs:</strong> Responsible for accessing and distributing all specimens and related content.</p><p><strong>RegionIcon.cs:</strong> A small serializable class for keeping track of icons assigned to regions (for the Shelf menu in Tray Mode).</p><p><strong>AnnotationData.cs:</strong> Used for deserializing annotation data from JSON.</p><p><strong>AnnotationNullablePosition.cs:</strong> For deserializing annotation positions. A wrapper class that AnnotationData.cs can use to extract either a Vector3 or a global = true.</p><p><strong>DataManifest.cs:</strong> For deserializing the root of manifest.json</p><p><strong>LabData.cs:</strong> For deserializing lab data.</p><p><strong>RegionData.cs:</strong> For deserializing region data.</p><p><strong>SpecimenRequestData.cs:</strong> For deserializing specimen data from the manifest; is transformed into SpecimenData once loaded.</p><p><strong>ContentBlockData.cs:</strong> Holds parsed data from the content of an annotation. Used to generate rich media annotation content.</p><p><strong>SpecimenData.cs:</strong> Holds active specimen data, including links to the mesh/texture/material and parsed ContentBlockData once the asset bundle is loaded.</p><p><strong>DataLoader.cs:</strong> Spawned by SpecimenStore and responsible for all processes related to fetching manifest.json and online asset bundles.</p><p><strong>LocalDataLoader.cs:</strong> Extends DataLoader. For fetching a manifest located at manifestPath from Resources within the project.</p><p><strong>RemoteDataLoader.cs:</strong> Extends DataLoader. Connect MongoDB database. For fetching a mongo data.</p><p><strong>AnnotationParser.cs:</strong> For converting strings of annotation content to lists of ContentBlock</p>',16)];o.render=function(e,a,o,r,i,c){return t(),n("div",null,s)};export{a as __pageData,o as default};

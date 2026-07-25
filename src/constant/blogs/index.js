import { sampleTemplateOneBlog } from "./sampleTemplateOne";
import { sampleTemplateTwoBlog } from "./sampleTemplateTwo";
import { sampleCustomBuilderBlog } from "./sampleCustomBuilder";

export const blogs = [
  sampleTemplateOneBlog,
  sampleTemplateTwoBlog,
  sampleCustomBuilderBlog,
];

export function getAllBlogConstants() {
  return blogs;
}

import { mount } from "@vue/test-utils";
import Incremental from "@/components/Incremental.vue";

describe("Basic Dummy Test", () => {
  const wrapper = mount(Incremental);
  test("Easy test", () => {
    expect(true).toBe(true);
  });
});

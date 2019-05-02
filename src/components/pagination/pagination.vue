<template>
    <ul class="x-pagination">
        <li @click="onPrev">
            <x-icon name="prev"></x-icon>
        </li>
        <li v-if="pageArrary[0]>1" @click="onPrevGroup">...</li>
        <li v-for="(n,index) in pageArrary" @click="onClickPage(n)" :key="n" :class="{active:n===currentPage}">{{n}}</li>
        <li v-if="pageArrary[groupSize-1]<total" @click="onNextGroup">...</li>
        <li @click="onNext">
            <x-icon name="next" class="icon"></x-icon>
        </li>
        <li>
            <span>前往</span><input type="text" v-model="goPage"><span>页</span>
        </li>
        <li @click="onGoPage">
            <x-icon name="go"></x-icon>
        </li>
    </ul>
</template>
<script>
import Vue from "vue";
import Icon from "./icon";
export default {
  name: "xPagination",
  components: { "x-icon": Icon },
  props: {
    value: {
      type: Number,
      default: 1,
      validator(value) {
        return value > 0;
      }
    },
    groupSize: {
      type: Number,
      default: 5,
      validator(value) {
        return value > 1;
      }
    },
    total: {
      type: Number,
      default: 20,
      validator(value) {
        return value > 2;
      }
    }
  },
  data() {
    return {
      pageArrary: [1, 2, 3, 4, 5],
      currentPage: undefined,
      goPage: undefined
    };
  },
  created() {
    this.currentPage = this.value;
  },
  methods: {
    onClickPage(n) {
      this.currentPage = n;
    },
    onPrev() {
      if (this.currentPage <= 1) {
        return;
      }
      this.currentPage--;
    },
    onNext() {
      if (this.currentPage >= this.total) {
        return;
      }
      this.currentPage++;
    },
    onPrevGroup() {
      let size = this.groupSize;
      if (this.currentPage > size + 1) {
        this.currentPage -= size;
      } else {
        this.currentPage = 1;
      }
    },
    onNextGroup() {
      let size = this.groupSize;
      if (this.currentPage > this.total - size - 1) {
        this.currentPage = this.total;
      } else {
        this.currentPage += size;
      }
    },
    onGoPage() {
      let goPage = this.goPage && parseInt(this.goPage.trim());
      if (goPage > 0 && goPage <= this.total) {
        this.currentPage = goPage;
        this.goPage = undefined;
      }
    }
  },
  watch: {
    currentPage(newValue, oldValue) {
      let arrary = this.pageArrary;
      let size = this.groupSize;
      if (newValue <= this.total - size + 1 && newValue >= size) {
        if (newValue > oldValue && newValue >= arrary[size - 1]) {
          let newArrary = [];
          for (let i = 0; i < size; i++) {
            newArrary.push(newValue + i);
          }
          this.pageArrary = newArrary;
        } else if (newValue < oldValue && newValue <= arrary[0]) {
          let newArrary = [];
          for (let i = 0; i < size; i++) {
            newArrary.unshift(newValue - i);
          }
          this.pageArrary = newArrary;
        }
      } else if (newValue > this.total - size) {
        let newArrary = [];
        for (let i = 0; i < size; i++) {
          newArrary.push(1 + i);
        }
        this.pageArrary = newArrary;
      } else if (newValue < size) {
        let newArrary = [];
        for (let i = 0; i < size; i++) {
          arrary.unshift(this.total - i);
        }
        this.pageArrary = newArrary;
      }
      this.$emit("input", newValue);
    }
  }
};
</script>
<style lang="scss" scoped>
$success: #64c832;
$error: #f56c6c;
$warning: #e6a03c;
$tips: #919196;
.x-pagination {
  display: flex;
  justify-content: center;
  align-items: stretch;
  list-style: none;
  > li {
    flex-shrink: 0;
    padding: 0.5em 0.5em;
    color: #666;
    border: 1px solid #ddd;
    border-left: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 14px;
    &:first-child {
      border-left: 1px solid #ddd;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
    > input {
      margin: 0 3px;
      width: 40px;
      font-size: 12px;
      padding: 2px 0.5em;
      border: 1px solid #ddd;
      border-radius: 4px;
      background: none;
      color: #666;
      &:hover {
        border-color: #999;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 0 1px rgba(0, 0, 0, 0.2);
      }
    }
    &:hover {
      color: $success;
    }
    &.disabled {
      background: #ddd;
    }
    &.active {
      color: $success;
      background: #eee;
    }
  }
}
</style> 
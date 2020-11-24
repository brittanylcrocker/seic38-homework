class SinglyLinkedList
  include Enumerable # Mixin (code somewhere else I would like to have access to):
  # Ruby equivalent of multiple inheritance

  class Node
    attr_accessor :value, :next

    def initialize(value)
      @value = value
      @next = nil
    end
  end

  attr_accessor :head

  def initialize(value=nil)
    @head = Node.new(value) unless value.nil?
  end

  def prepend(value) # AKA unshift
    node = Node.new value
    node.next = @head
    @head = node
  end

  def append(value)
    last.next = Node.new value
  end

  def last
    current_node = @head
    while current_node && current_node.next
      current_node = current_node.next # step once more along the list
    end
    current_node
  end

  def each
    node = @head
    node = node.next
    puts node
  end

  def remove #AKA shift() remove the first node
    # TODO: return nil when there are no nodes left
    node = @head
    @head = @head.next
    node.value
  end

  def insert_after(node, new_value)

  end

  def reverse
    reversed_list = SingleyLinkedList.new_value
    current_node = @head
    while current_node
      reversed_list.prepend(current_node.value)
      current_node = current_node.next
    end
  end

  def reverse!
    @head = self.reverse.head
  end

  def each
    current_node = @head
    while current_node
      yield(current_node.value) if block_given?
      current_node = current_node.next
    end
  end

  def find(value)
    # return the node with the value of needle or nil
    node = @head
    return false if !node.next
    return node if node.value == value
    while (node == node.next)
      if node.value == value
        return node
      end
    end
  end
end

bros = SinglyLinkedList.new
bros.prepend 'Harpo'
bros.prepend 'Groucho'
bros.prepend 'Chico'

bros.each do |b|
  puts b
end


require 'pry'
binding.pry

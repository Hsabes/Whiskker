class User < ApplicationRecord
    has_many :meow_posts

    has_many :comments
    # has_many :meow_posts, through: :comments
    has_many :commented_posts, through: :comments, source: :meow_post
    # example of how to use alias name: has_many :alias_name, through: :model_name, source: :initial_name

    # CATPANIONS

    has_many :catpanions
    has_many :friends, through: :catpanions

    # has_many :requested_relationships, foreign_key: "requestor_id", class_name: 'Catpanion'
    # has_many :requestees, through: :requested_relationships

    # has_many :requestees_of_relationships, foreign_key: "requestee_id", class_name: 'Catpanion'
    # has_many :requestors, through: :requestees_of_relationships

    # MEOWMAILS

    has_many :sent_messages, class_name: "MeowMail", foreign_key: "sender_id"
    has_many :recipients, through: :sent_messages

    has_many :received_messages, class_name: "MeowMail", foreign_key: "recipient_id"
    has_many :senders, through: :recieved_messages



    has_secure_password
    # Potentially add inclusions to this to make sure that username has only letters and numbers
    validates :username, presence: true, uniqueness: true, length: { maximum: 30 }
    # Potentially add inclusions to this to make sure that username has only letters
    validates :full_name, presence: true, length: { maximum: 30 }
    validates :bio, length: { maximum: 75 }

end
